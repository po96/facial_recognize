// OpenAI API 설정
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // 여기에 API 키 입력
async function startAnalysis() {
	const base64Image = await getBase64(uploadedImage);
    
// OpenAI 대신 내가 만든 서버 주소로 요청!
    const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64Image })
    });

        const data = await response.json();

        // API 응답 자체가 에러인 경우 (키 문제 등)
        if (data.error) {
            console.error("API Error Detail:", data.error);
            alert(`OpenAI 에러 발생: ${data.error.message}`);
            return;
        }

        const resultText = data.choices[0].message.content.trim();
        console.log("AI 응답:", resultText);

        // 3. 결과 파싱 및 이동
        const match = resultText.match(/([^: \n]+):([0-9]+)/);
        if (match) {
            const animal = match[1].replace(/['"“”]/g, "").trim();
            const percent = match[2];
            window.location.href = `result.html?animal=${encodeURIComponent(animal)}&match_perc=${percent}`;
        } else {
            alert(`응답 형식이 다릅니다: ${resultText}`);
        }

    }

// 이미지 리사이징 (API 안정성을 위해 크기 조절)
function getBase64(img) {
    return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        // 최대 너비 500px로 리사이징하여 전송 속도 향상
        const maxWidth = 500;
        const scale = maxWidth / img.naturalWidth;
        canvas.width = maxWidth;
        canvas.height = img.naturalHeight * scale;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.7)); // 품질 0.7로 압축
    });
}