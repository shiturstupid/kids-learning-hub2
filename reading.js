function translateCloudStory(lang) {
  const el = document.getElementById("cloudStory");
  if (!el) return;

  if (lang === "fa") {
    el.querySelector("h3").textContent = "☁️ ابر کنجکاو";
    el.querySelector("p").innerHTML =
      "کاکو، ابر کنجکاو، می‌خواست دنیای پایین را کشف کند. او بر فراز جنگل‌ها، اقیانوس‌ها و شهرها شناور شد و پرسید: «از من چه می‌خواهید»<br>گل‌ها گفتند: «ما به باران تو نیاز داریم!»<br>خورشید گفت: «ما به سایه‌ات نیاز داریم!»<br>و کودکان گفتند: «ما به شکل‌های تو برای رویاپردازی نیاز داریم!»<br>کاکو لبخند زد و قول داد هر روز سر بزند.";
    el.querySelectorAll("button")[0].textContent = "🔊 گوش دادن";
    el.querySelectorAll("button")[1].textContent = "❌ بستن";
  } else {
    el.querySelector("h3").textContent = "☁️ The Curious Cloud";
    el.querySelector("p").innerHTML =
      "Coco the cloud wanted to explore the world below. She floated over forests, oceans, and cities, asking, “What do you need from me?”<br>The flowers said, “We need your rain!”<br>The sun said, “We need your shade!”<br>And the children said, “We need your shapes to dream!”<br>Coco smiled and promised to visit every day.";
    el.querySelectorAll("button")[0].textContent = "🔊 Listen";
    el.querySelectorAll("button")[1].textContent = "❌ Close";
  }
}

function translateMoonStory(lang) {
  const el = document.getElementById("moonStory");
  if (!el) return;

  if (lang === "fa") {
    el.querySelector("h3").textContent = "🌙 ماجراجویی نور ماه";
    el.querySelector("p").innerHTML =
      "لونا، پرتو ماه، عاشق رقصیدن روی پشت‌بام‌ها بود. یک شب، او با جغد خواب‌آلودی روبه‌رو شد که راه خانه‌اش را گم کرده بود.<br>لونا با درخشش خود مسیر را روشن کرد و او را از میان درختان هدایت کرد.<br>«ممنونم»، جغد گفت، «تو مثل یک قهرمان می‌درخشی!»";
    el.querySelectorAll("button")[0].textContent = "🔊 گوش دادن";
    el.querySelectorAll("button")[1].textContent = "❌ بستن";
  } else {
    el.querySelector("h3").textContent = "🌙 Moonlight Adventure";
    el.querySelector("p").innerHTML =
      "Luna the moonbeam loved to dance across rooftops. One night, she met a sleepy owl who couldn’t find his way home.<br>Luna lit the path with her glow, guiding him through the trees.<br>“Thank you,” hooted the owl, “You shine like a hero!”";
    el.querySelectorAll("button")[0].textContent = "🔊 Listen";
    el.querySelectorAll("button")[1].textContent = "❌ Close";
  }
}

function translateRainbowStory(lang) {
  const el = document.getElementById("rainbowStory");
  if (!el) return;

  if (lang === "fa") {
    el.querySelector("h3").textContent = "🌈 نجات رنگین‌کمان";
    el.querySelector("p").innerHTML =
      "رنگین‌کمان در طوفان رنگ‌هایش را از دست داد! قرمز در یک گل رز پنهان شده بود، آبی در دریا شنا می‌کرد و زرد در یک لیمو گیر کرده بود.<br>یک پروانه شجاع به سراغ هر کدام رفت و زمزمه کرد: «برگرد!»<br>رنگین‌کمان لبخند زد و دوباره آسمان را روشن کرد.";
    el.querySelectorAll("button")[0].textContent = "🔊 گوش دادن";
    el.querySelectorAll("button")[1].textContent = "❌ بستن";
  } else {
    el.querySelector("h3").textContent = "🌈 Rainbow Rescue";
    el.querySelector("p").innerHTML =
      "A rainbow lost its colors in a storm! Red was hiding in a rose, Blue was swimming in the sea, and Yellow was stuck in a lemon.<br>A brave butterfly flew to each one and whispered, “Come back!”<br>The rainbow smiled and lit up the sky again.";
    el.querySelectorAll("button")[0].textContent = "🔊 Listen";
    el.querySelectorAll("button")[1].textContent = "❌ Close";
  }
}



function translateSeedStory(lang) {
  const el = document.getElementById("seedStory");
  if (!el) return;
  el.querySelector("h3").textContent = lang === "fa" ? "🌱 دانه کوچولو" : "🌱 The Little Seed";
  el.querySelector("p").innerHTML = lang === "fa"?`
یک دانه کوچولو آرزو داشت درختی بلند شود.
«خاک گفت: «صبور باش
خورشید گفت: «شجاع باش»  
 باران گفت: «تشنگی بکش»
دانه گوش داد و روزی برگ‌هایش را به سوی آسمان کشید و زمزمه کرد: «موفق شدم!»
`
    : `A tiny seed dreamed of becoming a tall tree.<br>“Be patient,” said the soil.<br>“Be brave,” said the sun.<br>“Be thirsty,” said the rain.<br>The seed listened, and one day, it stretched its leaves to the sky and whispered, “I made it!”`;
  el.querySelectorAll("button")[0].textContent = lang === "fa" ? "🔊 گوش دادن" : "🔊 Listen";
  el.querySelectorAll("button")[1].textContent = lang === "fa" ? "❌ بستن" : "❌ Close";
}

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    "Home": "خانه",
    "Maths": "ریاضی",
    "Creative Corner": "گوشه خلاقیت",
    "Science Lab": "آزمایشگاه علوم",
    "Rainbow Reading": "رنگین‌کمان داستان",
    "🌈 Welcome to Rainbow Reading!": "🌈 به رنگین‌کمان داستان خوش آمدید!",
    "Discover stories, learn new words, and grow your reading rainbow!":
      "داستان‌ها را کشف کنید، واژه‌های جدید بیاموزید و رنگین‌کمان خواندن خود را رشد دهید!",
    "📖 Story Explorer": "📖 کاوشگر داستان",
    "🧩 Take the Reading Quiz": "🧩 آزمون خواندن را انجام دهید",
    "Choose a story to begin your adventure!": "برای شروع ماجراجویی خود، یک داستان انتخاب کنید!",
    "☁️ The Curious Cloud": "☁️ ابر کنجکاو",
    "🌙 Moonlight Adventure": "🌙 ماجراجویی نور ماه",
    "🌈 Rainbow Rescue": "🌈 نجات رنگین‌کمان",
    "🌱 The Little Seed": "🌱 دانه کوچولو",
    "🔊 Listen": "🔊 گوش دادن",
    "❌ Close": "❌ بستن",
    "🧩 Reading Quiz": "🧩 آزمون خواندن",
    "Answer questions based on the stories you've read!":
      "به سوالاتی پاسخ دهید که بر اساس داستان‌هایی که خوانده‌اید طراحی شده‌اند!",
    "➡️ Next Question": "➡️ سوال بعدی"
  };

  let originalTexts = {};

  window.setLanguage = function(lang) {
    document.querySelectorAll("*").forEach(el => {
      if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
        const text = el.textContent.trim();
        if (lang === "fa" && translations[text]) {
          if (!el.dataset.original) el.dataset.original = text;
          el.textContent = translations[text];
        } else if (lang === "en" && el.dataset.original) {
          el.textContent = el.dataset.original;
        }
      }
    });

    // Translate dynamic story content
    translateCloudStory(lang);
    translateMoonStory(lang);
    translateRainbowStory(lang);
    translateSeedStory(lang);
  };
});




window.onload = function () {
  const audio = document.getElementById("readingAudio");
  audio.volume = 0.5; // Set volume between 0.0 (mute) and 1.0 (full)
};
  

function showStoryExplorer() {
  const section = document.getElementById("storyExplorer");
  const isVisible = section.style.display === "block";


  section.style.display = isVisible ? "none" : "block";

  // If hiding, also close any open story windows and stop speech
  if (isVisible) {
    document.body.classList.remove("story-active");
    const openWindows = section.querySelectorAll(".story-window");
    openWindows.forEach(win => win.style.display = "none");
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
    }
  }
}

    function openStory(storyId) {
      document.getElementById(storyId).style.display = "block";
    }
let currentUtterance = null;

function listenToStory(storyId) {
  const storyText = document.getElementById(storyId).querySelector("p").textContent;
  currentUtterance = new SpeechSynthesisUtterance(storyText);
  speechSynthesis.speak(currentUtterance);
}

function closeStory(storyId) {
  document.getElementById(storyId).style.display = "none";
  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel();
    currentUtterance = null;
  }
}
function openStory(storyId) {
  document.body.classList.add("story-active");
  document.getElementById(storyId).style.display = "block";
}

function closeStory(storyId) {
  document.body.classList.remove("story-active");
  document.getElementById(storyId).style.display = "none";
  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel();
  }
}
let readingQuizIndex = 0;
let selectedReadingQuestions = [];


let currentLanguage = "en";


// Bilingual pool (English + Persian)
const readingQuestionPoolByLang = {
  en: [
    {
      question: "☁️ What did Coco the cloud ask everyone?",
      options: ["Where am I?", "What do you need from me?", "Can I rain now?", "Do you like clouds?"],
      answer: 1
    },
    {
      question: "☁️ What did the flowers need from Coco?",
      options: ["Sunlight", "Rain", "Shade", "Dreams"],
      answer: 1
    },
    {
      question: "🌙 Who did Luna help?",
      options: ["A squirrel", "A sleepy owl", "A lost cat", "A little star"],
      answer: 1
    },
    {
      question: "🌙 How did Luna help the owl?",
      options: ["She flew him home", "She gave him a map", "She lit the path", "She sang a song"],
      answer: 2
    },
    {
      question: "🌈 Where was Red hiding?",
      options: ["In a rose", "In a rainbow", "In a cloud", "In a lemon"],
      answer: 0
    },
    {
      question: "🌈 Who helped the rainbow get its colors back?",
      options: ["A unicorn", "A butterfly", "A bird", "A cloud"],
      answer: 1
    },
    {
      question: "🌱 What did the soil tell the seed?",
      options: ["Be brave", "Be patient", "Be thirsty", "Be tall"],
      answer: 1
    },
    {
      question: "🌱 What did the seed become?",
      options: ["A flower", "A bush", "A tall tree", "A rainbow"],
      answer: 2
    }
  ],
  fa: [
    {
      question: "☁️ کاکو، ابر کنجکاو، از همه چه پرسید؟",
      options: ["کجا هستم؟", "از من چه می‌خواهید؟", "می‌توانم باران کنم؟", "آیا ابرها را دوست دارید؟"],
      answer: 1
    },
    {
      question: "☁️ گل‌ها از کاکو چه می‌خواستند؟",
      options: ["نور خورشید", "باران", "سایه", "رویاها"],
      answer: 1
    },
    {
      question: "🌙 لونا به چه کسی کمک کرد؟",
      options: ["یک سنجاب", "یک جغد خواب‌آلود", "یک گربه گمشده", "یک ستاره کوچک"],
      answer: 1
    },
    {
      question: "🌙 لونا چگونه به جغد کمک کرد؟",
      options: ["او را به خانه پرواز داد", "به او نقشه داد", "مسیر را روشن کرد", "یک آهنگ خواند"],
      answer: 2
    },
    {
      question: "🌈 قرمز کجا پنهان شده بود؟",
      options: ["در یک گل رز", "در یک رنگین‌کمان", "در یک ابر", "در یک لیمو"],
      answer: 0
    },
    {
      question: "🌈 چه کسی به رنگین‌کمان کمک کرد تا رنگ‌هایش را پس بگیرد؟",
      options: ["یک اسب شاخدار", "یک پروانه", "یک پرنده", "یک ابر"],
      answer: 1
    },
    {
      question: "🌱 خاک به دانه چه گفت؟",
      options: ["شجاع باش", "صبور باش", "تشنه باش", "بلند باش"],
      answer: 1
    },
    {
      question: "🌱 دانه چه شد؟",
      options: ["یک گل", "یک بوته", "یک درخت بلند", "یک رنگین‌کمان"],
      answer: 2
    }
  ]
};

// Render current question
function renderReadingQuestion() {
  const q = selectedReadingQuestions[readingQuizIndex];
  if (!q) return;

  const questionEl = document.getElementById("quizQuestion");
  const optionsEl = document.getElementById("quizOptions");

  if (questionEl) questionEl.textContent = q.question;

  if (optionsEl) {
    optionsEl.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        const correct = i === q.answer;
        alert(correct ? "✅ Correct!" : "❌ Wrong!");
        document.getElementById("nextQuestionBtn").style.display = "inline-block";
      });
      optionsEl.appendChild(btn);
    });
  }
}

// Start quiz
window.startReadingQuiz = function() {
  document.getElementById("readingQuiz").style.display = "block";
  readingQuizIndex = 0;
  selectedReadingQuestions = readingQuestionPoolByLang[currentLanguage];
  renderReadingQuestion();
};

// Next question
window.nextReadingQuestion = function() {
  readingQuizIndex++;
  if (readingQuizIndex < selectedReadingQuestions.length) {
    renderReadingQuestion();
    document.getElementById("nextQuestionBtn").style.display = "none";
  } else {
    document.getElementById("quizQuestion").textContent = "🎉 Quiz Complete!";
    document.getElementById("quizOptions").innerHTML = "";
    document.getElementById("nextQuestionBtn").style.display = "none";
  }
};

// Close quiz
window.closeReadingQuiz = function() {
  document.getElementById("readingQuiz").style.display = "none";
};

// Switch language
window.setQuizLanguage = function(lang) {
  currentLanguage = lang;
  document.body.dir = (lang === "fa" ? "rtl" : "ltr");

  // If quiz is open, refresh immediately
  if (document.getElementById("readingQuiz").style.display === "block") {
    selectedReadingQuestions = readingQuestionPoolByLang[currentLanguage];
    renderReadingQuestion();
  }
};


function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startReadingQuiz() {
  document.getElementById("readingQuiz").style.display = "block";
  document.getElementById("storyExplorer").style.display = "none";
  readingQuizIndex = 0;
  selectedReadingQuestions = shuffleArray(readingQuestionPool).slice(0, 5);
  showReadingQuestion();
}

function showReadingQuestion() {
  const q = selectedReadingQuestions[readingQuizIndex];
  if (!q) return;

  document.getElementById("quizQuestion").textContent = `${readingQuizIndex + 1}. ${q.question}`;
  const optionsDiv = document.getElementById("quizOptions");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.answer) {
        btn.style.backgroundColor = "#66ff66";
        btn.textContent += " ✅";
      } else {
        btn.style.backgroundColor = "#ff6666";
        btn.textContent += " ❌";
      }
      document.getElementById("nextQuestionBtn").style.display = "inline-block";
      Array.from(optionsDiv.children).forEach(b => b.disabled = true);
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById("nextQuestionBtn").style.display = "none";
}

function nextReadingQuestion() {
  readingQuizIndex++;
  if (readingQuizIndex < selectedReadingQuestions.length) {
    showReadingQuestion();
  } else {
    document.getElementById("quizQuestion").textContent = "🎉 You've finished the quiz!";
    document.getElementById("quizOptions").innerHTML = "";
    document.getElementById("nextQuestionBtn").style.display = "none";
  }
}

function closeReadingQuiz() {
  document.getElementById("readingQuiz").style.display = "none";
  document.getElementById("quizQuestion").textContent = "";
  document.getElementById("quizOptions").innerHTML = "";
  document.getElementById("nextQuestionBtn").style.display = "none";}


document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("backgroundAudio");

  function ensurePlay() {
    if (audio.paused) {
      audio.play().catch(err => console.log("Autoplay blocked:", err));
    }
  }

  document.getElementById("volUpBtn").addEventListener("click", () => {
    ensurePlay();
    audio.volume = Math.min(audio.volume + 0.1, 1);
    console.log("Volume up:", audio.volume);
  });

  document.getElementById("volDownBtn").addEventListener("click", () => {
    ensurePlay();
    audio.volume = Math.max(audio.volume - 0.1, 0);
    console.log("Volume down:", audio.volume);
  });

  document.getElementById("muteBtn").addEventListener("click", () => {
    ensurePlay();
    audio.muted = !audio.muted;
    console.log("Muted:", audio.muted);
  });
});



