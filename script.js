// Assignment Code
var generateBtn = document.querySelector("#generate"); // This is selecting the generate ID from the HTML and making it a variable.



// Write password to the #password input
function writePassword() {
  

  // Generate Password
  function generatePassword(length, upperCase, lowerCase, numbers, specialCharacters) {
    
    // Password Criteria
    var length = prompt("How long should the password be (between 8 to 128 characters)? Please answer with a number (i.e. 8)")
    length = parseInt(length)

    
    var upperCase = prompt("Can we include uppercase letters? (Yes/No)")
    upperCase = upperCase.toLowerCase
    
    var lowerCase = prompt("Can we include lowercase letters? (Yes/No)")
    lowerCase = lowerCase.toLowerCase
    
    var numbers = prompt("Can we include numbers? (Yes/No)")
    numbers = numbers.toLowerCase
    
    var specialCharacters = prompt("Can we include special characters? (Yes/No)")
    specialCharacters = specialCharacters.toLowerCase

    }

  


var password = generatePassword();

  var passwordText = document.querySelector("#password"); // This is selecting the password ID from the HTML and making it a variable.

  passwordText.value = password; // This is calling the value of the password created. 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // This is calling the writePassword function when the button is clicked.