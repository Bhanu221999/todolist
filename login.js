function saveSignUpDetails() {
    // Retrieve signup details
    var signupUsername = document.getElementById("signupUsername").value;
    var signupPassword = document.getElementById("signupPassword").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var emailAddress = document.getElementById("emailAddress").value;

    // Validate if password matches repeat password
    if (signupPassword !== repeatPassword) {
        alert("Passwords do not match. Please re-enter.");
        return;
    }

    

    // Validate if all required fields are filled
    if (
        signupUsername.trim() === "" ||
        signupPassword.trim() === "" ||
        repeatPassword.trim() === ""
    ) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Validate email format
    if (!isValidEmail(emailAddress)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    // Create a unique key for the new user
    var userCount = localStorage.getItem("userCount") || 0;
    var userKey = "user_" + userCount;

    // Save signup details in local storage with unique keys for each user
    localStorage.setItem(userKey + "_username", signupUsername);
    localStorage.setItem(userKey + "_password", signupPassword);
    localStorage.setItem(userKey + "_email", emailAddress);

    // Increment userCount for the next user
    localStorage.setItem("userCount", ++userCount);

    alert("Sign up successful! You can now log in.");
    // Reset input fields after successful sign-up
    resetSignUpFields();
}

// Email validation function
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function redirectToHome() {
    // Retrieve entered login details
    var enteredUsername = document.getElementById("user").value;
    var enteredPassword = document.getElementById("pass").value;

    // Validate if all required fields are filled
    if (enteredUsername.trim() === "" || enteredPassword.trim() === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    // Retrieve stored signup details from local storage
    var userCount = localStorage.getItem("userCount") || 0;
    var isLoggedIn = false;

    // Check login details against stored signup details for each user
    for (var i = 0; i < userCount; i++) {
        var savedUsername = localStorage.getItem("user_" + i + "_username");
        var savedPassword = localStorage.getItem("user_" + i + "_password");

        if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
            alert("Login successful! Redirecting to home page...");
            isLoggedIn = true;
            // Add code here to redirect or perform actions after successful login
            window.location.href = "index.html";
            break;
        }
    }

    if (!isLoggedIn) {
        alert("Invalid username or password. Please try again.");
        // Reset input fields after unsuccessful login
        resetLoginFields();
    }
}

function resetSignUpFields() {
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupPassword").value = "";
    document.getElementById("repeatPassword").value = "";
    document.getElementById("emailAddress").value = "";
}

function resetLoginFields() {
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
}
