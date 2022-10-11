// Assignment Code
var generateBtn = document.querySelector("#generate");

// created functions for the prompts

var length;
var hasLower;
var hasUpper;
var hasNumbers;
var hasSpecial;

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function numberLength() {
  length = prompt("Choose a Password Length of 6-128 characters");
  length = Number(length);
  console.log (typeof length);
  console.log (length)
  if (length < 6 || length > 128) {
  alert("Please choose a number between 6 and 128")
  } else {
  lowerCase()
  };
  return length;
}

function lowerCase() {
  hasLower = confirm("Would like to use lowercase letters?");
  console.log (hasLower)
  upperCase();
  return hasLower;
  
}


function upperCase() {
  hasUpper = confirm("Would like to use UPPERCASE letters?");
  console.log (hasUpper)
  useNumbers();
  return hasUpper;
}

function useNumbers() {
  hasNumbers = confirm("Would like to use numbers?");
  console.log (hasNumbers)
  specialChars();
  return hasNumbers;
}

function specialChars() {
  hasSpecial = confirm("Would like to use Special Characters?");
  console.log (hasSpecial);
  pull()
  return hasSpecial;
}



function pull(){
  console.log (length, hasLower, hasUpper, hasNumbers, hasSpecial);
  }

  var lengthGood = length;

  console.log (lengthGood);
 

// created variables for values selected

// created random select functions

// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');





// generateEl.addEventListener('click', () => {
// //   // const length = lengthEl.value;
//   const includeLower = hasLowerEl.checked;
//   const includeUpper = hasUpperEl.checked;
//   const includeNumbers = hasNumbersEl.checked;
//   const includeSymbols = hasSpecialEl.checked;

//   console.log (includeLower, includeUpper, includeNumbers, includeSymbols);


// });


 
//  console.log(getRandomLower());

 function generatePassword(){

  let generatedPassword = '';

  const typesCount = hasLower + hasUpper + hasNumbers + hasSpecial;

  console.log('typesCount', typesCount);

  const typesArr = [{hasLower}, {hasUpper}, {hasNumbers}, {hasSpecial}].filter
    (
        items => Object.values(items)[0]
    );

  console.log(typesArr);

  if(typesCount === 0) {
    alert("You must choose one item!")
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type =>{
      const funcName = Object.keys(type)[0]; 
      console.log ("funcName: ", funcName)

      generatedPassword += randomFunc[funcName]();

      })
  }

}

 function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }

 function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

 function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

 function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>"
  return symbols [Math.floor(Math.random() * symbols.length)];
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