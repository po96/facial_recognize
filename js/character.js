const CHARACTER_DATA = [
  {
    "id": 1,
    "animal_ko": "토끼",
    "animal_en": "Rabbit",
    "match_tag": "토끼", 
    "image_url": "image/1.jpg",
    "description": "당신은 행운을 가져다주는 네 잎 클로버 찾기 선수예요. 크고 순한 눈매처럼 마음이 착하고, 깡충깡충 뛰는 것처럼 활발한 에너지를 가졌어요. 친구들의 고민을 쫑긋 세워 들어주는 다정한 상담가랍니다.",
    "keywords": ["호기심_가득", "다정함_만렙", "네잎클로버_헌터"],
    "personality_type": "The Counselor (상담가)"
  },
  {
    "id": 2,
    "animal_ko": "여우",
    "animal_en": "Fox",
    "match_tag": "여우",
    "image_url": "image/2.jpg",
    "description": "당신은 영리하고 민첩한 숲속의 탐정이에요. 갸름하고 뾰족한 턱선처럼 세련되고 분석적인 느낌을 주죠. 새로운 놀이를 만드는 것을 좋아하며, 뛰어난 눈치로 친구들이 원하는 것을 미리 알아차리는 센스쟁이예요.",
    "keywords": ["영리함", "세련된_분위기", "아이디어_뱅크"],
    "personality_type": "The Inventor (발명가)"
  },
  {
    "id": 3,
    "animal_ko": "늑대",
    "animal_en": "Wolf",
    "match_tag": "늑대",
    "image_url": "image/3.jpg",
    "description": "당신은 지혜롭고 엉뚱한 상상을 많이 하는 몽상가예요. 무서운 불 대신 무지개 비눗방울을 뿜으며 친구들에게 마술 쇼를 보여주는 리더십 있는 친구랍니다. 때로는 엉뚱한 매력으로 주변을 즐겁게 만들어요.",
    "keywords": ["리더십", "몽상가", "무지개_방울"],
    "personality_type": "The Dreamer (몽상가)"
  },
  {
    "id": 4,
    "animal_ko": "판다",
    "animal_en": "Panda",
    "match_tag": "판다",
    "image_url": "image/4.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 5,
    "animal_ko": "쥐",
    "animal_en": "Mouse",
    "match_tag": "쥐",
    "image_url": "image/5.jpg",
    "description": "작지만 누구보다 부지런한 살림꾼이에요. 주머니 속에 항상 맛있는 치즈 조각을 숨겨두었다가 배고픈 친구에게 몰래 나눠주는 다정한 마음씨를 가졌답니다.",
    "keywords": ["살림꾼", "부지런함", "다정함"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 6,
    "animal_ko": "소",
    "animal_en": "Cow",
    "match_tag": "소",
    "image_url": "image/6.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 7,
    "animal_ko": "호랑이",
    "animal_en": "Tiger",
    "match_tag": "호랑이",
    "image_url": "image/7.jpg",
    "description": "씩씩하고 용감해 보이지만 사실은 꽃향기를 맡는 걸 좋아하는 감성파예요. 머리에 쓴 꽃장식처럼 항상 밝은 에너지를 뿜으며 친구들을 든든하게 지켜준답니다.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 8,
    "animal_ko": "용",
    "animal_en": "Dragon",
    "match_tag": "용",
    "image_url": "image/8.jpg",
    "description": "하늘 위 구름 사탕을 만드는 것이 취미인 몽상가예요. 무서운 불 대신 무지개 비눗방울을 뿜으며 숲속 친구들에게 마술 쇼를 보여주는 인기가 만점인 친구랍니다.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 9,
    "animal_ko": "뱀",
    "animal_en": "Snake",
    "match_tag": "뱀",
    "image_url": "image/9.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 10,
    "animal_ko": "말",
    "animal_en": "Horse",
    "match_tag": "말",
    "image_url": "image/10.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 11,
    "animal_ko": "양",
    "animal_en": "Sheep",
    "match_tag": "양",
    "image_url": "image/11.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 12,
    "animal_ko": "원숭이",
    "animal_en": "Monkey",
    "match_tag": "원숭이",
    "image_url": "image/12.jpg",
    "description": "당신은 어디를 가나 분위기를 밝게 만드는 타고난 재기꾼이에요. 호기심이 많아 새로운 환경에 적응하는 능력이 뛰어나며, 재치 있는 말솜씨로 주변 사람들을 즐겁게 합니다. 가끔은 장난기가 넘치지만, 사실 누구보다 눈치가 빠르고 상황 판단력이 좋습니다.",
    "keywords": ["사교적", "재치", "빠른_적응력"],
    "personality_type": "The Entertainer (재치 있는 분위기 메이커)"
  },
  {
    "id": 13,
    "animal_ko": "닭",
    "animal_en": "Chiken",
    "match_tag": "닭",
    "image_url": "image/13.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 14,
    "animal_ko": "개",
    "animal_en": "Dog",
    "match_tag": "개",
    "image_url": "image/14.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 14,
    "animal_ko": "강아지",
    "animal_en": "Dog",
    "match_tag": "강아지",
    "image_url": "image/14.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 15,
    "animal_ko": "돼지",
    "animal_en": "Pig",
    "match_tag": "돼지",
    "image_url": "image/15.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 16,
    "animal_ko": "물고기",
    "animal_en": "Fish",
    "match_tag": "물고기",
    "image_url": "image/16.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 17,
    "animal_ko": "벌레",
    "animal_en": "Bug",
    "match_tag": "벌레",
    "image_url": "image/17.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 18,
    "animal_ko": "고양이",
    "animal_en": "Cat",
    "match_tag": "고양이",
    "image_url": "image/18.jpg",
    "description": "당신은 알다가도 모를 매력을 가진 예술가예요. 가끔은 혼자만의 시간이 필요하지만, 소중한 사람에겐 은근슬쩍 다가가 애교를 부리는 '츤데레' 매력이 있죠. 예리한 관찰력을 가졌으며, 남들은 모르는 나만의 확고한 취향을 즐깁니다.",
    "keywords": ["독립적", "예리함", "신비로운_매력"],
    "personality_type": "The Artist (섬세한 예술가)"
  },
  {
    "id": 19,
    "animal_ko": "곰",
    "animal_en": "Bear",
    "match_tag": "곰",
    "image_url": "image/19.jpg",
    "description": "당신은 숲속의 든든한 보호자예요. 푸근한 인상 속에 깊은 배려심을 간직하고 있어 친구들이 가장 의지하는 존재죠. 묵묵히 자신의 자리를 지키며, 맛있는 음식을 나눠 먹을 때 가장 행복해하는 따뜻한 마음의 소유자입니다.",
    "keywords": ["든든함", "배려심", "미식가"],
    "personality_type": "The Guardian (든든한 수호자))"
  },
  {
    "id": 20,
    "animal_ko": "사슴",
    "animal_en": "Dear",
    "match_tag": "사슴",
    "image_url": "image/20.jpg",
    "description": "당신은 맑은 이슬을 닮은 순수한 몽상가예요. 맑은 눈망울처럼 세상을 아름답게 바라보며, 타인의 감정을 섬세하게 읽어내는 능력이 탁월합니다. 조용하지만 우아한 분위기를 풍기며, 주변 사람들을 기분 좋게 만드는 맑은 에너지를 가졌어요.",
    "keywords": ["순수함", "공감능력", "우아함"],
    "personality_type": "The Dreamer (순수한 공상가)"
  },
  {
    "id": 21,
    "animal_ko": "고래",
    "animal_en": "Whale",
    "match_tag": "고래",
    "image_url": "image/21.jpg",
    "description": "당신은 넓은 마음과 깊은 내면을 가진 평화로운 사색가예요. 눈앞의 사소한 일에 일희일비하기보다 긴 호흡으로 세상을 바라보는 여유가 있습니다. 묵묵히 자신의 길을 가는 당신의 모습은 주변 사람들에게 큰 신뢰와 안정감을 줍니다.",
    "keywords": ["포용력", "차분함", "깊은_내면"],
    "personality_type": "The Thinker (깊은 마음의 사색가)"
  },
  {
    "id": 22,
    "animal_ko": "너구리",
    "animal_en": "Dear",
    "match_tag": "너구리",
    "image_url": "image/22.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 23,
    "animal_ko": "올빼미",
    "animal_en": "Owl",
    "match_tag": "올빼미",
    "image_url": "image/23.jpg",
    "description": "당신은 모두가 잠든 밤에도 진실을 꿰뚫어 보는 지혜로운 전략가예요. 신중하고 분석적인 태도로 문제를 해결하며, 어떤 상황에서도 객관적인 시각을 잃지 않습니다. 조용하지만 날카로운 통찰력을 바탕으로 가장 효율적인 길을 찾아내는 능력이 탁월합니다.",
    "keywords": ["분석적", "신중함", "지혜"],
    "personality_type": "The Strategist (지혜로운 전략가)"
  },
  {
    "id": 24,
    "animal_ko": "고슴도치",
    "animal_en": "Hedgehog",
    "match_tag": "고슴도치",
    "image_url": "image/24.jpg",
    "description": "뾰족한 가시 뒤에 수줍은 미소를 숨기고 있어요. 처음엔 낯을 가리지만 친해지면 자신의 소중한 꽃을 나누어 주는 따뜻한 성격으로, 밤마다 작은 발로 숲을 산책한답니다.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 99,
    "animal_ko": "Undefined",
    "animal_en": "Undefined",
    "match_tag": "Undefined",
    "image_url": "",
    "description": "아주 멋진 성격이에요!.",
    "keywords": ["미스테리", "신비로움"],
    "personality_type": "The Unnown (알려지지않은자)"
  }
  
]

