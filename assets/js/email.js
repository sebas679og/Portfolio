document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const sendBtn = document.querySelector("[data-form-btn]");
  const formStatus = document.getElementById("form-status");

  // ── Helper: lee traducción actual ─────────────────────────
  function t(path) {
    const translations = window.translations;
    if (!translations) return path;
    return path.split(".").reduce((acc, key) => acc?.[key], translations) || path;
  }

  // ── EmailJS init ──────────────────────────────────────────
  if (typeof emailjs !== "undefined") {
    emailjs.init("XesP358N3K3XNloGJ");
  } else {
    console.error("EmailJS is not loaded correctly.");
    return;
  }

  // ── Verificar si el form está completo ────────────────────
    function checkFormFilled() {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const allFilled =
            name.value.trim() !== "" &&
            email.value.trim() !== "" &&
            message.value.trim().length >= 10;

        sendBtn.disabled = !allFilled;
    }

  form.addEventListener("input", checkFormFilled);

  // ── Validación por campo ──────────────────────────────────
  function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (name.value.trim() === "") {
      setError(name, "name-error", t("contact.form.errors.nameRequired"));
      isValid = false;
    } else {
      clearError(name, "name-error");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      setError(email, "email-error", t("contact.form.errors.emailRequired"));
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      setError(email, "email-error", t("contact.form.errors.emailInvalid"));
      isValid = false;
    } else {
      clearError(email, "email-error");
    }

    if (message.value.trim() === "") {
      setError(message, "message-error", t("contact.form.errors.messageRequired"));
      isValid = false;
    } else {
      clearError(message, "message-error");
    }

    return isValid;
  }

  function setError(input, errorId, msg) {
    input.classList.add("invalid");
    document.getElementById(errorId).textContent = msg;
  }

  function clearError(input, errorId) {
    input.classList.remove("invalid");
    document.getElementById(errorId).textContent = "";
  }

  // ── Submit ────────────────────────────────────────────────
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    sendBtn.disabled = true;
    sendBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${t("contact.form.sending")}`;

    emailjs.sendForm("service_q7r35ir", "template_s7v45rp", form)
      .then(() => {
        showStatus(t("contact.form.success"), "success");
        form.reset();
        // Resetear botón y re-verificar estado
        restoreBtn();
        checkFormFilled();
        form.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        showStatus(t("contact.form.error"), "error");
        restoreBtn();
        checkFormFilled(); // re-habilita si los campos siguen llenos
      })
      .finally(() => {
        // finally ya no toca el botón, lo manejan then/catch
      });
  });

  // ── Restaurar botón con estructura correcta ───────────────
  function restoreBtn() {
    sendBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span data-i18n="contact.form.submit">${t("contact.form.submit")}</span>`;
  }

  // ── Mostrar estado ────────────────────────────────────────
  function showStatus(text, type) {
    formStatus.textContent = text;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = "block";

    setTimeout(() => {
      formStatus.className = "form-status";
      formStatus.textContent = "";
      formStatus.style.display = "none";
    }, 5000);
  }
});
