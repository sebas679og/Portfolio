document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("[data-form]");
    const sendBtn = document.querySelector("[data-form-btn]");
    const messageBox = document.getElementById("form-message");

    if (typeof emailjs !== "undefined") {
        emailjs.init("XesP358N3K3XNloGJ");
    } else {
        console.error("EmailJS no está cargado correctamente.");
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
        sendBtn.querySelector("span").textContent = "Sending...";

        emailjs.sendForm("service_q7r35ir", "template_s7v45rp", form)
            .then(() => {
                showMessage("Mensaje enviado con éxito 🎉", "success");
                form.reset();
                sendBtn.disabled = true;
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                showMessage("Ocurrió un error al enviar el mensaje.", "error");
            })
            .finally(() => {
                sendBtn.querySelector("span").textContent = "Send Message";
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
