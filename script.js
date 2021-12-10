// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for criteria of password


// Validate length entered is between 8 and 128 


// Capture criteria of password (case, numeric, special character)



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