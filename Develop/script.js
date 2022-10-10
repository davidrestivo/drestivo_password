// Assignment Code
var generateBtn = document.querySelector("#generate");

// created functions for the prompts

function numberLength() {
  var length = prompt("Choose a Password Length of 6-128 characters");
  length = Number(length);
  console.log (typeof length);
  console.log (length)
  if (length < 6 || length > 128) {
  alert("Please choose a number between 6 and 128")
  } else {
  lowerCase()
  };
}

function lowerCase() {
  var hasLower = confirm("Would like to use lowercase letters?");
  console.log (hasLower)
  
  upperCase();
}

function upperCase() {
  var hasUpper = confirm("Would like to use UPPERCASE letters?");
  console.log (hasUpper)
  
  useNumbers();
}

function useNumbers() {
  var hasNumbers = confirm("Would like to use numbers?");
  console.log (hasNumbers)

  specialChars();
}

function specialChars() {
  var hasSpecial = confirm("Would like to use Special Characters?");
  console.log (hasSpecial)
  
}

var typesArr = [hasLower, hasUpper, hasNumbers, hasSpecial].filter (item => Object.values(item)[0]);

console.log ('typesArr: ', typesArr);

// const typesArr = [{hasLower} + {hasUpper} + {hasNumbers} + {hasSymbol} + length];

// console.log ("typesArray: ", typesArr);



// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   numbers: getRandomNumber,
//   symbol: getRandomSymbol

// };

 

// created variables for values selected

// created random select functions

 function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }

 function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

 function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

 function getRandomSymbol () {
  const symbols = "!@#$%^&*(){}[]=<>"
  return symbols [Math.floor(Math.random() * symbols.length)];
 }
 console.log(getRandomSymbol());

 function generatePassword(hasLower, hasUpper, hasNumbers, hasSymbol, length){

  let generatedPassword = '';


 

 }


// Write password to the #password input  
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Need a way to store the user's choice for length of password --> variable
// Prompt user for length of password
  // IF the user chooses a number outside the acceptable range, need to do SOMETHING
    // Alert that the validation failed?
    // Return to the prompt, OR
    // Exit out of the function
// Need variables storing each of our character sets--arrays?:
  // Uppercase
  // Lowercase
  // Numbers
  // Special Characters
// Need a variable to store the user's choice for whether to use each character set
// IF the user fails to select any characters, need to do SOMETHING
  // Alert that the validation failed?
  // Return to the prompt, OR
  // Exit out of the function
// Generate a random character from each chosen array
  // May be some IF statements regarding which character arrays were chosen
  // Generate a random array index using Math.floor(Math.random() * array.length)
  // Grab the character at the randomly-generated index
  // Add it to the end of the password string
    // Need a variable to store the generated password
// Repeat ^ for each chosen array
// Join/concatenate the up to four selected character sets
// Iterate until password.length === the length the user chose
  // Generate a random character from the mega-array and add it to the end of the password string on each loop
// Return the generated password