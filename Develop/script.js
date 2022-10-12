// Assignment Code
var generateBtn = document.querySelector("#generate");

// created variables for all the character sets
var length;
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersChar = "1234567890";
var specialChar = "!@#$%^&*()_+";
var charSet = "";

// Created the prompts for all the conditions for character
// put a console.log on each of the character choices to see the results in console
// put a call for the 1st function in the html
// added a charSet reset to reload the parameters after password is generated and attempting again
function numberLength() {
  charSet = "";
  length = prompt("Choose a Password Length of 6-128 characters");
  length = Number(length);
  console.log (typeof length);
  console.log (length)
  if (length < 6   || length > 128) {
  alert("Please choose a number between 6 and 128")
  return "";
  } else {
  lowerCase()
  };
  return length;

}
// got rid of all the returns in the confirm functions
// added charset += to add in the choice selections
function lowerCase() {
  lower = confirm("Would like to use lowercase letters?");
  if(lower){
    charSet += lowerChar;
  }
  console.log (lower)
  upperCase();
  
}

function upperCase() {
  upper = confirm("Would like to use UPPERCASE letters?");
  if(upper){
    charSet += upperChar;
  }
  console.log (upper)
  useNumbers();

}

function useNumbers() {
  numbers = confirm("Would like to use numbers?");
  if(numbers){
    charSet += numbersChar;
  }
  console.log (numbers)
  specialChars();

}

function specialChars() {
  special = confirm("Would like to use Special Characters?");
  if(special){
    charSet += specialChar;
  }
  // console.log (special);
  // console.log (charSet);

}

// worked on the random function and write of the gereated password with the tutor
 
function generatePassword(){
// console.log (charSet.length);  
  if (charSet.length === 0){
    alert ("Make at least once choice");
    return "Select a parameter";
  }else {
  retVal = "";
  
  for (var i = 0, n = charSet.length; i < length; ++i) {
      retVal += charSet.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
  }
}


// Write password to the #password input  
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);