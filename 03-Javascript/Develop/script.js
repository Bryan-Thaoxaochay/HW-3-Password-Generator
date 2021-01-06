// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria - alert
// WHEN prompted for password criteria - alert
// THEN I select which criteria to include in the password - 
// WHEN prompted for the length of the password - prompt
// THEN I choose a length of at least 8 characters and no more than 128 characters - 
// WHEN prompted for character types to include in the password - prompt
// THEN I choose lowercase, uppercase, numeric, and/or special characters - 
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page - alert

// Click the button, selection of criteria appear (prompts), criteria is chosen, password is created, password is shown (alert)

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Criteria
 var length = prompt("Choose a number between 8 and 128 for your password length.")
  var upperCase = alert("Can we include uppercase letters?")
  var lowerCase = alert("Can we include lowercase letters?")
  var numbers = alert("Can we include numbers?")
  var specialCharacters = alert("Can we include special characters?")

// Write password to the #password input
function writePassword(length, upperCase, lowerCase, numbers, specialCharacters) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
