// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = "abc123";

// Inputs
var passwordLength = 0;
var specialCharacter = true;
var numeric = true;
var lowerUpperCase = "L";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt for criteria of password
passwordLength = window.prompt("How long do you want your password to be? Enter a number between 8 and 128");
    console.log(passwordLength);

// Validate length entered is between 8 and 128
if (passwordLength > 128) {
  window.alert('Sorry, the length must be no more than 128 characters');

} else if (passwordLength < 8) {
    window.alert('Sorry, the length must be at least 8 characters');
}

//TODO: Restart prompts if password is not within required length


// Ask if special characters should be included in password 
var specialCharacter = window.prompt ('Do you wany special characters in your password? Enter "Yes" or "No"');


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
var password = Math.floor(Math.random().toString(36).substr(2, 5));

console.log(password)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}