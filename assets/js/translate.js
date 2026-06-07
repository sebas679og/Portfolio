document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "en";

  function resolve(obj, path) {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  }

  async function setLanguage(lang) {
    const res = await fetch(`./assets/i18n/${lang}.json`);
    const t = await res.json();

    window.translations = t;
    window.currentLang = lang;

    // Textos normales
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = resolve(t, el.getAttribute("data-i18n"));
      if (value) el.textContent = value;
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const value = resolve(t, el.getAttribute("data-i18n-placeholder"));
      if (value) el.setAttribute("placeholder", value);
    });

    // CV link
    const cvLink = document.getElementById("cv-download-link");
    if (cvLink) {
      cvLink.setAttribute(
        "href",
        lang === "es"
          ? "/assets/cv/es/Sebastian_Orjuela_CV.pdf"
          : "/assets/cv/en/Sebastian_Orjuela_CV.pdf",
      );
    }

    currentLang = lang;
    document.querySelector("#lang-toggle span").textContent =
      lang === "en" ? "ES" : "EN";
  }

  document.getElementById("lang-toggle").addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "es" : "en");
  });

  setLanguage(currentLang);
});
