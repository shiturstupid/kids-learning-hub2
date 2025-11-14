function setLanguage(lang) {
  if (lang === 'fa') {
    applyPersianTranslation();
  } else {
    location.reload();
  }
}



function applyPersianTranslation() {
  const translations = {
  

    "Home": "خانه",
    "Maths": "ریاضی",
    "Creative Corner": "گوشه خلاقیت",
    "Reading Rainbow": "رنگین کمان داستان",
    "🧪 Welcome to the Science Lab!": "🧪 به آزمایشگاه علوم خوش آمدید!",
    "Explore the wonders of the world around you!": "شگفتی‌های دنیای اطراف خود را کشف کنید!",
    "Choose a Science Adventure:": "یک ماجراجویی علمی انتخاب کنید:",
    "🌱 Learn About Plants": "🌱 درباره گیاهان بیاموزید",
    "🚀 Explore Space": "🚀 کاوش در فضا",
    "🧩 Science Quiz": "🧩 آزمون علوم",
    "🌱 How Do Plants Grow?": "🌱 گیاهان چگونه رشد می‌کنند؟",
    "Plants need sunlight, water, and soil to grow. They use their leaves to catch sunlight and roots to drink water!":
      "گیاهان برای رشد به نور خورشید، آب و خاک نیاز دارند. آن‌ها با برگ‌هایشان نور خورشید را جذب می‌کنند و با ریشه‌هایشان آب می‌نوشند!",
    "Step 1: 🌞 Sunlight hits the leaves": "مرحله ۱: 🌞 نور خورشید به برگ‌ها می‌تابد",
    "Step 2: 💧 Roots absorb water": "مرحله ۲: 💧 ریشه‌ها آب را جذب می‌کنند",
    "Step 3: 🌿 Plant makes food and grows!": "مرحله ۳: 🌿 گیاه غذا تولید می‌کند و رشد می‌کند!",
    "🌿 Try It Yourself!": "🌿 خودتان امتحان کنید!",
    "❌ Close": "❌ بستن",
    "Space is full of stars, planets, moons, and mysteries! Let’s discover some amazing facts:":
      "فضا پر از ستاره‌ها، سیارات، ماه‌ها و رازهاست! بیایید برخی حقایق شگفت‌انگیز را کشف کنیم:",
    "🌞 The Sun is big enough to fit 1 million Earths inside!":
      "🌞 خورشید به اندازه‌ای بزرگ است که یک میلیون زمین در آن جا می‌گیرد!",
    "🌕 You can't walk on Jupiter or Saturn — they have no solid surface!":
      "🌕 نمی‌توانید روی مشتری یا زحل راه بروید — آن‌ها سطح جامد ندارند!",
    "🌌 Comets are leftovers from the birth of our solar system!":
      "🌌 دنباله‌دارها باقی‌مانده‌های تولد منظومه شمسی ما هستند!",
    "🚀 Flying to Pluto would take over 800 years in a plane!":
      "🚀 پرواز به پلوتو با هواپیما بیش از ۸۰۰ سال طول می‌کشد!",
    "🛸 Launch Rocket!": "🛸 پرتاب موشک!",
    "🌠 Your rocket is ready! Click to launch:": "🌠 موشک شما آماده است! برای پرتاب کلیک کنید:",
    "🚀 Blast Off!": "🚀 پرتاب!",
    "🧪 Science Quiz": "🧪 آزمون علوم",
    "➡️ Next Question": "➡️ سوال بعدی"
 
  };

 Object.entries(translations).forEach(([en, fa]) => {
    document.querySelectorAll("*").forEach(el => {
      if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
        if (el.textContent.trim() === en) {
          el.textContent = fa;
        }
      }
    });
  });
}
