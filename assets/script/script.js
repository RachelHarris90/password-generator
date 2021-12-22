var alphaCharactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaCharacterLower = "abcdefghijklmnopqrstuvwxyz";
var numericCharacter = "0123456789";
var specialCharacter = "!@#$%^&*()?/";

var passwordLength = 10;
var incUpperOrLowerCase = true;
var incUpperCase = true;
var incLowerCase = true;
var incNumeric = true;
var incSpecialCharacter = true;

var password = "";
var acceptableCharacters = "";

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
  var incNumeric = window.prompt ('Do you want numeric characters in your password? Enter "Yes" or "No"')
  // Convert response to uppercase to use in IF statement
  incNumeric = incNumeric.toUpperCase()
  // Convert YES/NO to true/false then console log answer
  if (incNumeric == "YES") {
    incNumeric = true;
  } else {
    incNumeric = false;
  }
  console.log(incNumeric);
};

enterNumeric();

// Ask if special characters should be included in password 
function enterSpecialCharacter () {
  incSpecialCharacter = window.prompt ('Do you want special characters in your password? Enter "Yes" or "No"');
  // Convert response to uppercase to use in IF statement
  incSpecialCharacter = incSpecialCharacter.toUpperCase();
  // Convert YES/NO to true/false then console log answer
  if (incSpecialCharacter == "YES") {
    incSpecialCharacter = true;
  } else {
    incSpecialCharacter = false;
  }
  console.log(incSpecialCharacter);
};

enterSpecialCharacter();


var enterLowerCase = function() {
  // Ask if password should be lowercase or uppercase
  var incLowerCase = window.prompt ('Do you want lowercase letters in your password? Enter "Yes" or "No"');
  incLowerCase = incLowerCase.toUpperCase();  
  if (incLowerCase == "YES") {
    incLowerCase = true;
  } else {
    incLowerCase = false;
  }
  console.log(incLowerCase);
};

enterLowerCase();

var enterUpperCase = function() {
  // Ask if password should be lowercase or uppercase
  var incUpperCase = window.prompt ('Do you want lowercase letters in your password? Enter "Yes" or "No"');
  incUpperCase = incUpperCase.toUpperCase();  
  if (incUpperCase == "YES") {
    incUpperCase = true;
  } else {
    incUpperCase = false;
  }
  console.log(incUpperCase);
};

enterLowerCase();

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
for (let i = 0; i < passwordLength; i++) {
  var randomPassword = Math.floor(Math.random() * alphaCharactersUpper.length);
    password += alphaCharactersUpper.slice(randomPassword, randomPassword +1);
  };
}
 
generatePassword() 
console.log(password);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
