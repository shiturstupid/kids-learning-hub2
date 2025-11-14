document.addEventListener("DOMContentLoaded", () => {
  const dashboardTranslations = {
    // Header
    "🌟 Welcome to BrightMind 🌟": "🌟 به ذهن روشن خوش آمدید 🌟",

    "Learning Adventures ▾": "ماجراجویی‌های آموزشی ▾",
    "Math Magic": "جادوی ریاضی",
    "Reading Rainbow": "رنگین کمان داستان",
    "Science Lab": "آزمایشگاه علوم",
    "Creative Corner": "گوشه خلاقیت",
    "Quizzes": "آزمون‌ها",
    "Talk to Kitty!": "با کیتی صحبت کن!",
"About Us":"در مورد ما",
    
    'Click on "Learnig Adventures" to Choose:': 'برای انتخاب، روی "ماجراجویی‌های آموزشی" کلیک کنید:',
    //"Math Magic": "جادوی ریاضی",
    //"Reading Rainbow": "رنگین‌کمان خواندن",
    //"Science Lab": "آزمایشگاه علوم",  gonna check these if needed 
    //"Creative Corner": "گوشه خلاقیت",

    // Footer
    "GitHub": "گیت‌هاب",
    "Email": "ایمیل",
    "Made by Zoha Azizi": "ساخته شده توسط ضحی عزیزی"
  };

  let originalTexts = {};

  window.setDashboardLanguage = function(lang) {
    document.querySelectorAll("*").forEach(el => {
      if (
        el.childNodes.length === 1 &&
        el.childNodes[0].nodeType === 3 &&
        el.textContent.trim() !== ""
      ) {
        const text = el.textContent.trim();
        if (lang === "fa" && dashboardTranslations[text]) {
          if (!el.dataset.original) el.dataset.original = text;
          el.textContent = dashboardTranslations[text];
        } else if (lang === "en" && el.dataset.original) {
          el.textContent = el.dataset.original;
        }
      }
    });
  };
});

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
