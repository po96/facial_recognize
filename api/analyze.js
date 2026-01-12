export default async function handler(req, res) {
  const { image } = req.body; // 브라우저에서 보낸 이미지 데이터

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` // 서버 환경변수 사용 (안전)
      },
      body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: "당신은 관상 전문가입니다. 사진을 분석해 닮은 동물을 하나 정하고 '동물:숫자' 형식으로 답하세요."
                    },
                    {
                        role: "user",
                        content: [
                            { type: "text", text: "이 사람의 얼굴과 가장 닮은 동물을 '동물:확신도' 형식으로만 답해줘." },
                            {
                                type: "image_url",
                                image_url: { "url": image }
                            }
                        ]
                    }
                ],
                max_tokens: 50
            })
    });

    const data = await response.json();
    res.status(200).json(data); // 브라우저에는 결과만 전달
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}