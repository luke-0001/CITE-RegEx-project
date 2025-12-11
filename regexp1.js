










// Email: username + @ + domain + . + TLD
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Username: 3–16 alphanumeric characters
const usernameRegex = /^[A-Za-z0-9]{3,16}$/;

// Strong Password: 8+ characters, UPPER + lower + digit + special charater
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



// test variables
var testEmail = prompt("Enter your email");
var testUsername = prompt("Enter your Username");
var testPassword = prompt("Enter your password");


// console.log
console.log("Email Validation");
console.log(testEmail, "→", emailRegex.test(testEmail));

console.log("Username Validation");
console.log(testUsername,"-", usernameRegex.test(testUsername));

console.log("Password Validation");
console.log(testPassword, "→", passwordRegex.test(testPassword));

