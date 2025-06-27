document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "en";

    async function setLanguage(lang) {
        const res = await fetch(`./assets/i18n/${lang}.json`);
        const translations = await res.json();

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[key]) el.textContent = translations[key];
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (translations[key]) el.setAttribute("placeholder", translations[key]);
        });

        currentLang = lang;
        document.getElementById("lang-toggle").textContent = lang === "en" ? "ES" : "EN";
    }

    document.getElementById("lang-toggle").addEventListener("click", () => {
        const newLang = currentLang === "en" ? "es" : "en";
        setLanguage(newLang);
    });

    setLanguage(currentLang);
});