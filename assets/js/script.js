// Assignment code here

//defining  all lower, upper, numeric, and special character types that can generate the password
var lowerCaseCharactersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharactersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharactersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacterArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '}', '~'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var characterPool = []

var displayPassword = []

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
      characterPool = characterPool.concat(lowerCaseCharactersArray);
    }

  var upperCharacters = window.confirm("Do you want to include uppercase characters?");
    if (upperCharacters) {
      characterPool = characterPool.concat(upperCaseCharactersArray);
    }


  var numericCharacters = window.confirm("Do you want to include numeric characters?");
    if (numericCharacters) {
      characterPool = characterPool.concat(numericCharactersArray);
    }

  var specialCharacters = window.confirm("Do you want to include special characters?");
    if (specialCharacters) {
      characterPool = characterPool.concat(specialCharacterArray);
    }

  for (i = 0; i < passwordLength; i++) {
    var selectedCharacter = randomizeArray(characterPool);

    displayPassword.push(selectedCharacter);
    
  }

  //turn displayPassword array into a string
  var displayPasswordString = displayPassword.join('');
  

  //return displayPasswordString to be called in writePassword function
  return displayPasswordString;

};

//randomizing the characterpool array
var randomizeArray = function(characterArray) {
  //to grab a random index from the array
  var randomArrayIndex = Math.floor(Math.random() * characterArray.length);
  

  //displayCharacter is locating a particlar item in the array based on the index
  var displayCharacter = characterArray[randomArrayIndex];
  

  //return the displayCharacter variable so the value can be used in generate password function
  return displayCharacter;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //using dom to show password onto the screen
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
