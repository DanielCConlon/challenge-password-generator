// Assignment code here

//defining  all lower, upper, numeric, and special character types that can generate the password
var lowerCaseCharactersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharactersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharactersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacterArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '}', '~'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var characterPool = []

function generatePassword() {

  //prompts user to put in at least 8 characters but no more than 128
  var passwordLength = window.prompt("How many characters would you like your password to contain?");

    //if input is less than 8 alert them it needs to be at least 8
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))  {
      window.alert("Password length must be a number between 8 and 128 characters");

      generatePassword();
    }

    //prompting the user different character type options
  var lowerCharacters = window.confirm("Do you want to include lowercase characters?");
    if (lowerCharacters){
      characterPool.push(lowerCaseCharactersArray);
      console.log(characterPool);
    }

  var upperCharacters = window.confirm("Do you want to include uppercase characters?");
    if (upperCharacters) {
      characterPool.push(upperCaseCharactersArray);
      console.log(characterPool);
    }


  var numericCharacters = window.confirm("Do you want to include numeric characters?");
    if (numericCharacters) {
      characterPool.push(numericCharactersArray);
      console.log(characterPool);
    }

  var specialCharacters = window.confirm("Do you want to include special characters?");
    if (specialCharacters) {
      characterPool.push(specialCharacterArray);
      console.log(characterPool);
    }

  randomizeArray();

  return passwordLength;

};

//randomizing the characterpool array
var randomizeArray = function(characterPool) {
  //
  var randomArrayIndex = Math.floor(Math.random() * characterPool.passwordLength);
  console.log(randomArrayIndex);
  var displayCharacters = characterPool.randomArrayIndex;
  console.log(displayCharacters);
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
