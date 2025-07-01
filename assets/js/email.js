document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("[data-form]");
    const sendBtn = document.querySelector("[data-form-btn]");
    const messageBox = document.getElementById("form-message");

    function translate(key){
        return window.translations?.[key] || key;
    }

    if (typeof emailjs !== "undefined") {
        emailjs.init("XesP358N3K3XNloGJ");
    } else {
        console.error("EmailJS is not loaded correctly.");
        return;
    }

    form.addEventListener("input", () => {
        const inputs = form.querySelectorAll("[data-form-input]");
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
        sendBtn.disabled = !allFilled;
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        sendBtn.disabled = true;
        sendBtn.querySelector("span").textContent = translate("msg_sending");

        emailjs.sendForm("service_q7r35ir", "template_s7v45rp", form)
            .then(() => {
                showMessage(translate("msg_success"), "success");
                form.reset();
                sendBtn.disabled = true;
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                showMessage(translate("msg_error"), "error");
            })
            .finally(() => {
                sendBtn.querySelector("span").textContent = translate("t101");
            });
    });

    function showMessage(text) {
        messageBox.textContent = text;
        messageBox.classList.add("visible");

        setTimeout(() => {
            messageBox.classList.remove("visible");
        }, 5000);
    }

});
