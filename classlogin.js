
// Class for managing user sign-up functionality
class SignUpManager {
    constructor() {
    // Initialize userCount from localStorage or default to 0
      this.userCount = parseInt(localStorage.getItem("userCount")) || 0;
    }
    // Save sign-up details to localStorage
    saveSignUpDetails(signupUsername, signupPassword, repeatPassword, emailAddress) {
    // Check if passwords match
      if (signupPassword !== repeatPassword) {
        alert("Passwords do not match. Please re-enter.");
        return;
      }
      // Generate a unique key for the user based on userCount
      const userKey = `user_${this.userCount}`;
      // Store user details in localStorage
      localStorage.setItem(`${userKey}_username`, signupUsername);
      localStorage.setItem(`${userKey}_password`, signupPassword);
      localStorage.setItem(`${userKey}_email`, emailAddress);
      // Increment userCount and update it in localStorage
      this.userCount++;
      localStorage.setItem("userCount", this.userCount);

      // Display success message and reset input fields
      alert("Sign up successful! You can now log in.");
      this.resetInputFields();
    }
    // Reset input fields for sign-up
    resetInputFields() {
      document.getElementById("signupUsername").value = "";
      document.getElementById("signupPassword").value = "";
      document.getElementById("repeatPassword").value = "";
      document.getElementById("emailAddress").value = "";
    }
  }
  // Class for managing user login functionality
  class LoginManager {
    constructor() {
      // Initialize userCount from localStorage or default to 0
      this.userCount = parseInt(localStorage.getItem("userCount")) || 0;
    }
      // Redirect to home page after successful login
    redirectToHome(enteredUsername, enteredPassword) {
      let isLoggedIn = false;
        // Check entered username and password against stored credentials
      for (let i = 0; i < this.userCount; i++) {
        const savedUsername = localStorage.getItem(`user_${i}_username`);
        const savedPassword = localStorage.getItem(`user_${i}_password`);


          // If credentials match, redirect to home page
        if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
          alert("Login successful! Redirecting to home page...");
          isLoggedIn = true;
          window.location.href = "index.html";
          break;
        }
      }
  
    // If login fails, display error message and reset input fields
      if (!isLoggedIn) {
        alert("Invalid username or password. Please try again.");
        this.resetInputFields();
      }
    }
  
        // Reset input fields for login
    resetInputFields() {
      document.getElementById("user").value = "";
      document.getElementById("pass").value = "";
    }
  }
  
  // Example usage:
  const signUpManager = new SignUpManager();
  const loginManager = new LoginManager();
  
  // Function to handle sign-up button click
  function saveSignUpDetails() {
        // Get input values for sign-up
    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
    const emailAddress = document.getElementById("emailAddress").value;
      // Call sign-up manager to save details
    signUpManager.saveSignUpDetails(signupUsername, signupPassword, repeatPassword, emailAddress);
  }
  
  // Function to handle login button click
  function redirectToHome() {
        // Get input values for login
    const enteredUsername = document.getElementById("user").value;
    const enteredPassword = document.getElementById("pass").value;

      // Call login manager to redirect to home page
    loginManager.redirectToHome(enteredUsername, enteredPassword);
  }
  