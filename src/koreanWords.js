var KOREAN_WORDS = [
    "돕다",
    "시골",
    "혼자서",
    "글씨",
    "보내다",
    "재주",
    "노력",
    "이사하다",
    "명사구",
    "숨기다",
    "항상",
    "두통",
    "보다",
    "빠르다",
    "규칙적으로"
]
function randomWord() {
    return KOREAN_WORDS[Math.floor(Math.random() * KOREAN_WORDS.length)];
  }
  
  export { randomWord };