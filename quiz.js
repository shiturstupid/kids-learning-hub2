let quizIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedQuestions = [];

const quizQuestionPool = [
  // 🌈 Reading
  {
    question: "☁️ What did Coco the cloud ask everyone?",
    options: ["Where am I?", "What do you need from me?", "Can I rain now?", "Do you like clouds?"],
    answer: 1
  },
  {
    question: "🌙 Who did Luna help?",
    options: ["A squirrel", "A sleepy owl", "A lost cat", "A little star"],
    answer: 1
  },

  // 🧪 Science
  {
    question: "🌱 What helps plants grow?",
    options: ["Moonlight", "Rain", "Wind", "Snow"],
    answer: 1
  },
  {
    question: "☁️ What forms clouds?",
    options: ["Dust", "Water vapor", "Air", "Sunlight"],
    answer: 1
  },

  // ➕ Maths
  {
    question: "➕ What is 3 + 4?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "🧮 What comes after 9?",
    options: ["10", "11", "8", "12"],
    answer: 0
  },

  // 🎨 Art
  {
    question: "🎨 What color do you get when you mix red and blue?",
    options: ["Green", "Purple", "Orange", "Yellow"],
    answer: 1
  },
  {
    question: "🖌️ What tool do you use to paint?",
    options: ["Hammer", "Brush", "Spoon", "Stick"],
    answer: 1
  }
];
const quizTranslations = {
  "☁️ What did Coco the cloud ask everyone?": "☁️ کوکو، ابر کوچولو، از همه چه پرسید؟",
  "Where am I?": "من کجا هستم؟",
  "What do you need from me?": "از من چه می‌خواهید؟",
  "Can I rain now?": "می‌توانم باران ببارم؟",
  "Do you like clouds?": "ابرها را دوست دارید؟",

  "🌙 Who did Luna help?": "🌙 لونا به چه کسی کمک کرد؟",
  "A squirrel": "یک سنجاب",
  "A sleepy owl": "یک جغد خواب‌آلود",
  "A lost cat": "یک گربه گمشده",
  "A little star": "یک ستاره کوچولو",

  "🌱 What helps plants grow?": "🌱 چه چیزی به رشد گیاهان کمک می‌کند؟",
  "Moonlight": "نور ماه",
  "Rain": "باران",
  "Wind": "باد",
  "Snow": "برف",

  "☁️ What forms clouds?": "☁️ ابرها چگونه تشکیل می‌شوند؟",
  "Dust": "گرد و غبار",
  "Water vapor": "بخار آب",
  "Air": "هوا",
  "Sunlight": "نور خورشید",

  "➕ What is 3 + 4?": "➕ حاصل ۳ + ۴ چیست؟",
  "5": "۵",
  "6": "۶",
  "7": "۷",
  "8": "۸",

  "🧮 What comes after 9?": "🧮 بعد از عدد ۹ چه می‌آید؟",
  "10": "۱۰",
  "11": "۱۱",
  "12": "۱۲",

  "🎨 What color do you get when you mix red and blue?": "🎨 وقتی قرمز و آبی را ترکیب کنیم چه رنگی به‌دست می‌آید؟",
  "Green": "سبز",
  "Purple": "بنفش",
  "Orange": "نارنجی",
  "Yellow": "زرد",

  "🖌️ What tool do you use to paint?": "🖌️ برای نقاشی از چه ابزاری استفاده می‌کنید؟",
  "Hammer": "چکش",
  "Brush": "قلم‌مو",
  "Spoon": "قاشق",
  "Stick": "چوب"
};

let currentLanguage = "en";
const quizStaticTranslations = {
  // Navigation
  "Home": "خانه",

  // Headings
  "🌟Quiz Challenge": "🌟 چالش آزمون",
  "Test your knowledge from every corner of the rainbow!":
    "دانش خود را از هر گوشه رنگین‌کمان بیازمایید!",

  // Buttons
  "➡️ Next": "➡️ بعدی",
  "🔄 Restart": "🔄 شروع دوباره",

  // Score
  "✅ Correct: 0 | ❌ Wrong: 0": "✅ درست: ۰ | ❌ نادرست: ۰",
  "🎉 Quiz Complete!": "🎉 آزمون تمام شد!"
};

function translateStaticQuizText(lang) {
  document.querySelectorAll("*").forEach(el => {
    if (
      el.childNodes.length === 1 &&
      el.childNodes[0].nodeType === 3 &&
      el.textContent.trim() !== ""
    ) {
      const text = el.textContent.trim();
      if (lang === "fa" && quizStaticTranslations[text]) {
        if (!el.dataset.original) el.dataset.original = text;
        el.textContent = quizStaticTranslations[text];
      } else if (lang === "en" && el.dataset.original) {
        el.textContent = el.dataset.original;
      }
    }
  });
}

function setQuizLanguage(lang) {
  currentLanguage = lang;
  document.body.dir = lang === "fa" ? "rtl" : "ltr";
  translateStaticQuizText(lang);
  showQuizQuestion();
}


function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  quizIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  selectedQuestions = shuffleArray(quizQuestionPool).slice(0, 5);
  showQuizQuestion();
}

function showQuizQuestion() {
  const q = selectedQuestions[quizIndex];
  if (!q) return;

  const translatedQuestion = currentLanguage === "fa" && quizTranslations[q.question]
    ? quizTranslations[q.question]
    : q.question;

  document.getElementById("quizQuestion").textContent = `${quizIndex + 1}. ${translatedQuestion}`;
  const optionsDiv = document.getElementById("quizOptions");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const translatedOpt = currentLanguage === "fa" && quizTranslations[opt]
      ? quizTranslations[opt]
      : opt;

    const btn = document.createElement("button");
    btn.textContent = translatedOpt;
    btn.onclick = () => {
      if (i === q.answer) {
        btn.style.backgroundColor = "#66ff66";
        btn.textContent += " ✅";
        correctCount++;
      } else {
        btn.style.backgroundColor = "#ff6666";
        btn.textContent += " ❌";
        wrongCount++;
      }
      document.getElementById("nextBtn").style.display = "inline-block";
      Array.from(optionsDiv.children).forEach(b => b.disabled = true);
      updateScore();
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById("nextBtn").style.display = "none";
}


function nextQuizQuestion() {
  quizIndex++;
  if (quizIndex < selectedQuestions.length) {
    showQuizQuestion();
  } else {
    document.getElementById("quizQuestion").textContent = "🎉 Quiz Complete!";
    document.getElementById("quizOptions").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
  }
}

function updateScore() {
  document.getElementById("scoreTracker").textContent = `✅ Correct: ${correctCount} | ❌ Wrong: ${wrongCount}`;
}

function restartQuiz() {
  document.getElementById("quizQuestion").textContent = "";
  document.getElementById("quizOptions").innerHTML = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("scoreTracker").textContent = "✅ Correct: 0 | ❌ Wrong: 0";
  startQuiz();
}

window.onload = startQuiz;
const audio = document.getElementById("backgroundAudio");

function changeVolume(direction) {
  if (!audio) return;
  if (direction === "up") {
    audio.volume = Math.min(audio.volume + 0.1, 1);
  } else if (direction === "down") {
    audio.volume = Math.max(audio.volume - 0.1, 0);
  }
}

function toggleMute() {
  if (!audio) return;
  audio.muted = !audio.muted;
}
