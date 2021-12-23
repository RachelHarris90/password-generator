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

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt for password length
function enterPasswordLength() {
  // Asks length of password and store in passwordLength variable
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
console.log(passwordLength);

// Prompt for if numeric characters should be included
function enterNumeric() {
  // Ask if numbers should be included in password and store in incNumeric variable
  incNumeric = window.prompt ('Do you want numeric characters in your password? Enter "Yes" or "No"')
  // Convert input to uppercase to use in IF statement
  incNumeric = incNumeric.toUpperCase()
  // Convert YES to a string of numeric characters or NO to an empty
  if (incNumeric == "YES") {
    incNumeric = numericCharacter;
  } else {
    incNumeric = "";
  }
};
enterNumeric();
console.log(incNumeric);

// Prompt for if special characters should be included
function enterSpecialCharacter() {
  // Ask if special characters should be included in password and store in incSpecialCharacter variable
  incSpecialCharacter = window.prompt ('Do you want special characters in your password? Enter "Yes" or "No"');
  // Convert input to uppercase to use in IF statement
  incSpecialCharacter = incSpecialCharacter.toUpperCase();
  // Convert YES to a string of special characters or NO to an empty string 
  if (incSpecialCharacter == "YES") {
    incSpecialCharacter = specialCharacter;
  } else {
    incSpecialCharacter = "";
  }
};
enterSpecialCharacter();
console.log(incSpecialCharacter);

// Prompt for if lowercase alpha characters should be included
function enterLowerCase() {
  // Ask if lowercase alpha characters should be included in password and store in incLowerCase variable
  incLowerCase = window.prompt ('Do you want lowercase letters in your password? Enter "Yes" or "No"');
  // Convert input to uppercase to use in IF statement
  incLowerCase = incLowerCase.toUpperCase();  
  // Convert YES to a string of lower case alpha characters or NO to an empty string
  if (incLowerCase == "YES") {
    incLowerCase = alphaCharacterLower;
  } else {
    incLowerCase = "";
  }
};
enterLowerCase();
console.log(incLowerCase);

// Prompt for if lowercase alpha characters should be included
function enterUpperCase() {
  // Ask if uppercase alpha characters should be included in password and store in incLowerCase variable
  incUpperCase = window.prompt ('Do you want uppercase letters in your password? Enter "Yes" or "No"');
  // Convert input to uppercase to use in IF statement
  incUpperCase = incUpperCase.toUpperCase(); 
  // Convert YES to a string of upper case alpha characters or NO to an empty strong then console log result 
  if (incUpperCase == "YES") {
    incUpperCase = alphaCharactersUpper;
  } else {
    incUpperCase = "";
  }
};
enterUpperCase();
console.log(incUpperCase);

// Concatenate characets that should be included in password, based on inputs above
function getIncludedCharacters() {
  includedCharacters = (incSpecialCharacter + incUpperCase + incLowerCase + incNumeric);
}
getIncludedCharacters();
console.log(includedCharacters);

// Generate password using included characters and required password length
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

