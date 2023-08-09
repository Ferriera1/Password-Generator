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

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? Only use numbers between 8 and 128 digits.");
  console.log (passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) == true) {
  generatePassword();
  }
  console.log(isNaN(passwordLength));

  var yesOrNoSpecialCharacters = confirm("Would you like to use special characters?");
  if (specialCharacters == true) {
    
    
  }

  return "password";
  /*Return statement*/
}


// Add event listener to generate button
/* When the generate button is clicked the .addEventListener will invoke the writePasword function*/
generateBtn.addEventListener("click", writePassword);
