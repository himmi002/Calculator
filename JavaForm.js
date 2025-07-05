document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get form values
    const fullName = document.getElementById("Fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("number").value.trim();
    const password = document.getElementById("pass").value.trim();
    const confirmPassword = document.getElementById("confpass").value.trim();

    // Error elements
    const fullNameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    // Clear previous error messages
    fullNameError.style.display = "none";
    emailError.style.display = "none";
    phoneError.style.display = "none";
    passwordError.style.display = "none";
    confirmPasswordError.style.display = "none";
    let isValid = true;

    // Validate Full Name (at least 5 characters)
    if (fullName.length < 5) {
        fullNameError.textContent = "Full Name must be at least 5 characters long.";
        fullNameError.style.display = "block";
        isValid = false;
    }

    // Validate Email (must include '@')
    if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    }

    // Validate Phone Number (must be 10 digits and not '123456789')
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone) || phone === "1234567890") {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        phoneError.style.display = "block";
        isValid = false;
    }

    // Validate Password (not 'password', not 'fullName', at least 8 characters)
    if (password.length < 8 || password.toLowerCase() === "password" || password.includes(fullName)) {
        passwordError.textContent = "Password must be at least 8 characters long and cannot be 'password' or contain your name.";
        passwordError.style.display = "block";
        isValid = false;
    }

    // Validate Confirm Password (must match password)
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        isValid = false;
    }

    // If form is valid, you can proceed with submission or further processing
    if (isValid) {
        alert("Form submitted successfully!");
        // Perform form submission or any additional logic here
    }
});



