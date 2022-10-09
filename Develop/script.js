// Assignment Code
var generateBtn = document.querySelector("#generate");

// created functions for the prompts

function numberLength() {
  let length = prompt("Choose a Password Length of 6-128 characters");
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
  let lower = prompt("Would like to use lowercase letters? Y or N");
  if (lower == "Y") {
   lowerCase.lower == true;
  } else if ( lower == "N"){
    lowerCase.lower == false;
  }else {""

  }
  console.log (lower)
  
  upperCase();
}

function upperCase() {
  let upper = prompt("Would like to use UPPERCASE letters? Y or N");
  if (upper = "Y") {
    upper = true;
  } else {
    upper = false;
  }
  console.log (upper)
  
  useNumbers();
}

function useNumbers() {
  let numbers = prompt("Would like to use numbers? Y or N");
  if (numbers = "Y") {
    numbers = true;
  } else {
    numbers = false;
  }
  console.log (numbers)

  specialChars();
}

function specialChars() {
  let special = prompt("Would like to use Special Characters? Y or N");
  if (special = "Y") {
    special = true;
  } else {
    special = false;
  }
  console.log (special)

}
// created variables for values selected

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
  return symbols[Math.floor(Math.random() * symbols.length)];
 }

 let generatePassword = 

 console.log(getRandomSymbol());



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