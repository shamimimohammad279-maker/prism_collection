/*
  لیست ماژول‌های PRISM — تنها فایلی که برای افزودن ماژول جدید ویرایش می‌کنی.

  مراحل افزودن:
  ۱) فایل ماژول (مثلاً math.html) را کنار index.html آپلود کن.
  ۲) یک خط مثل خط‌های پایین، قبل از ] آخر، اضافه کن (آخر خط قبلی کاما یادت نرود).

  k     : اسم کوتاه انگلیسی، یکتا و بدون فاصله
  name  : اسمی که روی کارت نشان داده می‌شود
  icon  : یک ایموجی
  desc  : توضیح کوتاه زیر اسم
  color : pri (آبی) یا sec (بنفش) یا acc (سبز)
  file  : اسم فایل ماژول (اگر در پوشه است: "modules/math.html")

  ترتیب کارت‌ها همان ترتیب خط‌های این لیست است.
*/
window.PRISM_MODULES = [
  { k: "time",     name: "PRISM TIME",     icon: "⏱️", desc: "ساعت، تایمر، کرونومتر، ساعت جهانی و رویداد", color: "pri", file: "time.html" },
  { k: "physics",  name: "PRISM PHYSICS",  icon: "🔬", desc: "حرکت، سقوط آزاد و برخورد اجسام",            color: "acc", file: "physics.html" },
  { k: "universe", name: "PRISM UNIVERSE", icon: "🪐", desc: "منظومه‌ساز، سیاره‌ساز و ذخیره‌ی جهان‌ها",     color: "sec", file: "universe.html" },
  { k: "planet",   name: "PLANET LAB",     icon: "🌍", desc: "آزمایشگاه ساخت و بررسی سیاره‌ها",            color: "acc", file: "planet.html" },
  { k: "mind",     name: "PRISM MIND",     icon: "🧠", desc: "معماهای منطقی، الگو و احتمال",               color: "acc", file: "mind.html" },
  { k: "oracle",   name: "PRISM ORACLE",   icon: "🔮", desc: "ابزارهای متن: آمار، کلمات کلیدی، خلاصه",     color: "sec", file: "oracle.html" },
  { k: "life",     name: "PRISM LIFE",     icon: "🗂️", desc: "یادداشت، کارها، عادت‌ها، حساب و تبدیل",      color: "pri", file: "life.html" },
  { k: "rainbow",  name: "RAINBOW PUZZLE", icon: "🌈", desc: "بازی پازل رنگین‌کمان و مرتب‌کردن خانه‌ها",    color: "pri", file: "rainbow.html" },
  { k: "color",    name: "PRISM COLOR",    icon: "🎨", desc: "پالت، گرادیانت، تبدیل و کنتراست رنگ",        color: "sec", file: "color.html" }
];
