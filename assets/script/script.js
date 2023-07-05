const defaultNumericCharacters = "0123456789";
const defaultSpecialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const defaultAlphaLowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const defaultAlphaUpperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateBtn = document.querySelector("#generate");

let includedCharacters = "";
let passwordLength;
let password;

const enterPasswordLength = () => {
  passwordLength = window.prompt(
    "How long do you want your password to be? Enter a number between 8 and 128"
  );
  if (passwordLength > 128) {
    window.alert("Sorry, the length must be no more than 128 characters");
  } else if (passwordLength < 8) {
    window.alert("Sorry, the length must be at least 8 characters");
  }
};
enterPasswordLength();

const enterNumeric = () => {
  const includeNumeric = window
    .prompt(
      'Do you want numeric characters in your password? Enter "Yes" or "No"'
    )
    .toUpperCase();
  includedCharacters =
    includeNumeric === "YES"
      ? includedCharacters + defaultNumericCharacters
      : includedCharacters;
};
enterNumeric();

const enterSpecialCharacter = () => {
  const incSpecialCharacter = window
    .prompt(
      'Do you want special characters in your password? Enter "Yes" or "No"'
    )
    .toUpperCase();
  includedCharacters =
    incSpecialCharacter === "YES"
      ? includedCharacters + defaultSpecialCharacters
      : includedCharacters;
};
enterSpecialCharacter();

const enterLowerCase = () => {
  const incLowerCase = window
    .prompt(
      'Do you want lowercase letters in your password? Enter "Yes" or "No"'
    )
    .toUpperCase();
  includedCharacters =
    incLowerCase === "YES"
      ? includedCharacters + defaultAlphaLowerCharacters
      : includedCharacters;
};
enterLowerCase();

const enterUpperCase = () => {
  const incUpperCase = window
    .prompt(
      'Do you want uppercase letters in your password? Enter "Yes" or "No"'
    )
    .toUpperCase();
  includedCharacters =
    incUpperCase === "YES"
      ? includedCharacters + defaultAlphaUpperCharacters
      : includedCharacters;
};
enterUpperCase();

const generatePassword = () => {
  let generatedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += includedCharacters.charAt(
      Math.floor(Math.random() * includedCharacters.length)
    );
  }
  return generatedPassword;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);
