// Assignment Code
var generateBtn = document.querySelector("#generate");

// created functions for the prompts

// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById("length");
// const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

var length;
var lower;
var upper;
var numbers;
var special;


// generateEl.addEventListener("click", () => {
//   const length = lengthEl.value;
//   console.log (length);



// })

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
  lower = confirm("Would like to use lowercase letters?");
  console.log (lower)
  upperCase();
  return lower;
  
}


function upperCase() {
  upper = confirm("Would like to use UPPERCASE letters?");
  console.log (upper)
  useNumbers();
  return upper;
}

function useNumbers() {
  numbers = confirm("Would like to use numbers?");
  console.log (numbers)
  specialChars();
  return numbers;
}

function specialChars() {
  special = confirm("Would like to use Special Characters?");
  console.log (special);
  pull()
  return special;
}


function pull(){
  console.log (length, lower, upper, numbers, special);
  }
 

 function generatePassword(lower, upper, numbers, special, length){

  let generatedPassword = '';

  const typesCount = lower + upper + numbers + special;

  console.log('typesCount', typesCount);

  const typesArr = [{lower}, {upper}, {numbers}, {special}].filter
    (
        items => Object.values(items)[0]
    );

  console.log(typesArr);

  if(typesCount === 0) {
    alert("You must choose one item!")
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funName = Object.keys(type)[0]; 
      console.log ("funcName: ", funName);

      generatedPassword += randomFunc[funName]();

      });
    console.log(generatedPassword);
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