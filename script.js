function evaluatePassword() {
    const passwordInput = document.getElementById("password");
    const resultElement = document.getElementById("result");
    const togglePasswordIcon = document.getElementById("togglePassword");
    const password = passwordInput.value;

    let hasLowercase = false;
    let hasUppercase = false;
    let hasDigit = false;
    let hasSpecialChar = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (char >= "a" && char <= "z") {
            hasLowercase = true;
        } else if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        } else if (char >= "0" && char <= "9") {
            hasDigit = true;
        } else {
            hasSpecialChar = true;
        }

        if (hasLowercase && hasUppercase && hasDigit && hasSpecialChar && password.length >= 8) {
            resultElement.textContent = "Very strong password! Go ahead.";
            resultElement.style.color = "green";
            return;
        }
    }

    if (password.length < 8) {
        resultElement.textContent = "Password is too short. (Minimum 8 characters)";
        resultElement.style.color = "red";
    } else if (!hasLowercase) {
        resultElement.textContent = "Add at least one lowercase letter.";
        resultElement.style.color = "red";
    } else if (!hasUppercase) {
        resultElement.textContent = "Add at least one uppercase letter.";
        resultElement.style.color = "red";
    } else if (!hasDigit) {
        resultElement.textContent = "Add at least one digit.";
        resultElement.style.color = "red";
    } else if (!hasSpecialChar) {
        resultElement.textContent = "Add at least one special character.";
        resultElement.style.color = "red";
    }
}

const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    // Change the icon based on password visibility
    this.classList.toggle("fa-eye"); // Toggle between "eye-slash" and "eye" classes
});
