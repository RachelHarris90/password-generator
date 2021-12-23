var passwordLength = 10;
var incUpperCase = "";
var incLowerCase = "";
var incNumeric = "";
var incSpecialCharacter = "";

var numericCharacter = "0123456789";
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var alphaCharacterLower = "abcdefghijklmnopqrstuvwxyz";
var alphaCharactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var password = "";
var includedCharacters = "";

// Prompt for criteria of password
function enterPasswordLength() {
  passwordLength = window.prompt("How long do you want your password to be? Enter a number between 8 and 128");
  console.log(passwordLength);
// Validate length entered is between 8 and 128
  if (passwordLength > 128) {
    window.alert('Sorry, the length must be no more than 128 characters');
    } else if (passwordLength < 8) {
        window.alert('Sorry, the length must be at least 8 characters');
  }
};

enterPasswordLength();

function enterNumeric() {
  // Ask if numbers should be included in password 
  incNumeric = window.prompt ('Do you want numeric characters in your password? Enter "Yes" or "No"')
  // Convert response to uppercase to use in IF statement
  incNumeric = incNumeric.toUpperCase()
  // Convert YES/NO to true/false then console log answer
  if (incNumeric == "YES") {
    incNumeric = numericCharacter;
  } else {
    incNumeric = "";
  }
  console.log(incNumeric);
};

enterNumeric();

function enterSpecialCharacter() {
  incSpecialCharacter = window.prompt ('Do you want special characters in your password? Enter "Yes" or "No"');
  incSpecialCharacter = incSpecialCharacter.toUpperCase();
  if (incSpecialCharacter == "YES") {
    incSpecialCharacter = specialCharacter;
  } else {
    incSpecialCharacter = "";
  }
  console.log(incSpecialCharacter);
};

enterSpecialCharacter();

function enterLowerCase() {
  incLowerCase = window.prompt ('Do you want lowercase letters in your password? Enter "Yes" or "No"');
  incLowerCase = incLowerCase.toUpperCase();  
  if (incLowerCase == "YES") {
    incLowerCase = alphaCharacterLower;
  } else {
    incLowerCase = "";
  }
  console.log(incLowerCase);
};

enterLowerCase();

function enterUpperCase() {
  incUpperCase = window.prompt ('Do you want uppercase letters in your password? Enter "Yes" or "No"');
  incUpperCase = incUpperCase.toUpperCase();  
  if (incUpperCase == "YES") {
    incUpperCase = alphaCharactersUpper;
  } else {
    incUpperCase = "";
  }
};

enterUpperCase();
console.log(incUpperCase);

// Assignment Code
var generateBtn = document.querySelector("#generate");

function getIncludedCharacters() {
  includedCharacters = (incSpecialCharacter + incUpperCase + incLowerCase + incNumeric);
}
getIncludedCharacters();
console.log(includedCharacters);

function generatePassword() {
  password = "";
  for (var i = 0; i < passwordLength; i++) {
    password = includedCharacters.substring(Math.floor(Math.random() * passwordLength));
  }
  return password;
}

generatePassword();
console.log(password);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

