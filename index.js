function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "") {
        alert("Please enter User ID");
        return;
    }

    if (password === "") {
        alert("Please enter Password");
        return;
    }

    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid User ID or Password");
    }
}
