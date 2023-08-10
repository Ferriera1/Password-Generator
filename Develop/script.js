// Assignment Code
/*This generateBtn variable is selecting the generate ID which is the ID for the button 
in the HTML file*/
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*The writePassword function*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/*Global*/

var special = "!@#$%*?~=/\|";

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lower = "abcdefghijklmnopqrstuvwxyz";

var numbers = "0123456789";

function generatePassword() {

  var password = "";

  //prompt for password length
  var passwordLength = prompt("How long would you like your password to be? Only use numbers between 8 and 128 digits.");
  console.log (passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) == true) {
  generatePassword();
  }
 console.log(isNaN(passwordLength));
 
  var specialCharacters = confirm("Would you like to use special characters?");
  if (specialCharacters == true) {
    password += special[Math.floor(Math.random() * special.length)];
  }

  var upperCase = confirm("Would you like to use upper case letters?") 
  if (upperCase == true) {
    password += upper[Math.floor(Math.random() * upper.length)];  
  }
  var lowerCase = confirm("Would you like to use lower case letters?") 
  if (lowerCase == true) {
    password += lower[Math.floor(Math.random() * lower.length)];  
  }
  var addNumber = confirm("Would you like to use numbers?") 
  if (addNumber == true) {
    password += numbers[Math.floor(Math.random() * numbers.length)];  
  }

  /*Return statement*/
  return "password";
}


// Add event listener to generate button
/* When the generate button is clicked the .addEventListener will invoke the writePasword function*/
generateBtn.addEventListener("click", writePassword);
