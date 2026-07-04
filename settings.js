document.addEventListener("DOMContentLoaded", function () {

    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    const themeSelect = document.querySelector("select");

    // Load saved data
    if (localStorage.getItem("adminName")) {
        nameInput.value = localStorage.getItem("adminName");
    }

    if (localStorage.getItem("adminEmail")) {
        emailInput.value = localStorage.getItem("adminEmail");
    }

    if (localStorage.getItem("theme")) {
        themeSelect.value = localStorage.getItem("theme");
        applyTheme(localStorage.getItem("theme"));
    }

    // Save settings function
    window.saveSettings = function () {

        localStorage.setItem("adminName", nameInput.value);
        localStorage.setItem("adminEmail", emailInput.value);

        if (passwordInput.value !== "") {
            localStorage.setItem("adminPassword", passwordInput.value);
        }

        localStorage.setItem("theme", themeSelect.value);
        applyTheme(themeSelect.value);

        alert("Settings saved successfully!");
    };

    // Theme apply function
    function applyTheme(theme) {
        if (theme === "Dark") {
            document.body.style.background = "#1e1e2f";
            document.querySelector(".main").style.color = "white";
        } else {
            document.body.style.background = "#f4f6f9";
            document.querySelector(".main").style.color = "black";
        }
    }

});