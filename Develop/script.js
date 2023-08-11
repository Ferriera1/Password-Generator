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

var allCriteria = "";

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
  var upperCase = confirm("Would you like to use upper case letters?") 
  var lowerCase = confirm("Would you like to use lower case letters?") 
  var addNumber = confirm("Would you like to use numbers?") 

  if (specialCharacters == true) {
    allCriteria += special[Math.floor(Math.random() * special.length)];
  }

  if (upperCase == true) {
    allCriteria += upper[Math.floor(Math.random() * upper.length)];  
  }
  if (lowerCase == true) {
    allCriteria += lower[Math.floor(Math.random() * lower.length)];  
  }
  if (addNumber == true) {
    allCriteria += numbers[Math.floor(Math.random() * numbers.length)];  
  }

//this should iterate through the criteria until password length is met
  while(passwordLength > password.length){
    password += allCriteria[Math.floor(Math.random() * allCriteria.length)];
  }

  // if false is selected for all alert that there needs to be some criteria then prompt to start over. 

  if (specialCharacters === false && upperCase === false && lowerCase === false && addNumber === false){
    // generatePassword();
    alert("There needs to be some criteria.")
    generatePassword();
  }

  /*Return statement*/
  return generateBtn.value = password;
}


// Add event listener to generate button
/* When the generate button is clicked the .addEventListener will invoke the writePasword function*/
generateBtn.addEventListener("click", writePassword);
