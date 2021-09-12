var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase;
var numeric = "0123456789";
var special = "!@#$%^&*_-+=";
var characters = ""; //empty string to collect possible characters

var generateBtn = document.querySelector("#generate"); 

//function to collect  password length
var lenSelect = function() {
  var numChars = prompt("Enter a length for your password. You may choose a number between 8 and 128 characters");
    //validate
  if (numChars === "" || numChars < 8 || numChars > 128) {
    alert("Not a valid option. Please try again.");
    lenSelect();
  } 
  return numChars;
};

//function to collect char types 
var charTypeSelect = function() {
  var lower = prompt("Do you want to include lowercase alphabet characters?");
  if (lower === "yes" || lower === "YES" ) {
    //add lowercase string to possible outcomes
    characters += lowercase;
  } 

  var upper = prompt("Do you want to include uppercase alphabet characters?");
  if (upper === "yes" || upper === "YES" ) {
    characters += uppercase;
  } 

  var num = prompt("Do you want to include numeric characters?");
  if (num === "yes" || num === "YES" ) {
    characters += numeric;
  } 
  
  var spec = prompt("Do you want to include any special characters? eg. !@#$%^&*_-+=");
  if (spec === "yes" || special === "YES" ) {
    characters += special;
  } 

  if (characters === "") {
    alert("You must select at least one character type. Please try again.");
    charTypeSelect();
  }

  return characters; 
};

function generatePassword() {
  alert("Welcome to the Supersecurity Password Generator");
  alert("You will be guided through series of options to choose your password criteria");

  //call function to collect length
  var length = lenSelect();
  //call function to collect char types
  charTypeSelect(); 

  //generate password of specified length with the specified number of char types
  var password = "";
  for (var i = 0; i < length; i++) {
    //add a random character chosen from those available up to the length of the array
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
