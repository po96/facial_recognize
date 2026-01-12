// OpenAI API 설정
async function startAnalysis() {
    const uploadedImage = document.getElementById('uploaded-img');
    if (!uploadedImage) return;

    // 1. 이미지 변환
    const base64Image = await getBase64(uploadedImage);

    try {
        // 2. 중요: OpenAI가 아니라 내 서버(/api/analyze)로 요청을 보냄
        const response = await fetch("/api/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image })
        });

        const data = await response.json();

        if (data.error) {
            alert("서버 에러: " + data.error);
            return;
        }

        const resultText = data.choices[0].message.content.trim();
        const match = resultText.match(/([^: \n]+):([0-9]+)/);
        
        if (match) {
            const animal = match[1].trim();
            const percent = match[2];
            window.location.href = `result.html?animal=${encodeURIComponent(animal)}&match_perc=${percent}`;
        }
    } catch (error) {
        console.error("에러 발생:", error);
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