// Assignment Code
var generateBtn = document.querySelector("#generate");

// Inputs
var length = 0;
var specialCharacter = true;
var numeric = true;
var lowerUpperCase = "L";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for criteria of password
length = window.prompt("How long do you want your password to be? Enter a number betwen 8 and 128");
    console.log(length);

// Validate length entered is between 8 and 128


// Ask if special characters should be included in password 
specialCharacter = window.prompt ('Do you wany special characters in your password? Enter "Yes" or "No"');

// Convert response to uppercase to use in IF statement
specialCharacter = specialCharacter.toUpperCase()

// Convert YES/NO to true/false then console log answer
if (specialCharacter == "YES") {
  var specialCharacter = true;
} else {
  specialCharacter = false;
}

console.log(specialCharacter)

// Ask if numbers should be included in password 
numeric = window.prompt ('Do you want numeric characters in your password? Enter "Yes" or "No"')

// Convert response to uppercase to use in IF statement
numeric = numeric.toUpperCase()

// Convert YES/NO to true/false then console log answer
if (numeric == "YES") {
  var numeric = true;
} else {
  numeric = false;
}

console.log(numeric)

// Ask if password should be lowercase or uppercase
lowerUpperCase = window.prompt ('Do you want your password to be lowercase or uppercase? Enter "L" for lowercase or "U" for uppercase')

lowerUpperCase = lowerUpperCase.toUpperCase()
  console.log(lowerUpperCase)  


//Randomly generate password 
//TODO: Use criteria to generate password
var password = Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

console.log(password)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}