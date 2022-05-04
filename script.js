// Assignment code here

//defining  all lower, upper, numeric, and special character types that will generate the password
var lowerCaseCharactersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharactersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharactersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacterArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '}', '~'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordLength();
  
  passwordText.value = password;

}

var passwordLength = function() {
  //prompts user to put in at least 8 characters but no more than 128
  var getPasswordLength = window.prompt("How many characters would you like your password to contain?");

  if (getPasswordLength < 8) {
    window.alert("Password length must be at least 8 characters");
  }
  else if (getPasswordLength > 128) {
    window.alert("Password length must be less than 128 characters");
  }
  else {
    passwordLength();
  }
};

var characterTypes = function() {
  //prompting the user different character type options
  var characterTypesLower = window.confirm("Do you want to include lowercase characters?");
    if (characterTypesLower === true){
      window.alert("Lowercase characters will be included.");
    }
    else {

    }

  var characterTypesUpper = window.confirm("Do you want to include uppercase characters?");
    if (characterTypesUpper === true) {
      window.alert("Uppercase characters will be included.")
    }


  var characterTypesNumeric = window.prompt("Do you want to include numeric characters?");
    if (characterTypesNumeric === true) {
      window.alert("Numeric characters will be included.")
    }

  var characterTypesSpecialCharacters = window.prompt("Do you want to include special characters?");
  if (characterTypesSpecialCharacters === true) {
    window.alert("Special characters will be included.")
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
