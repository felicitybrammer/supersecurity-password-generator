var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase;
var numeric = "0123456789";
var special = "!@#$%^&*_-+=";
var characters = "";

var generateBtn = document.querySelector("#generate"); //class btn

//function to collect length
var lenSelect = function() {
  var numChars = prompt("Enter a length for your password. You may choose a number between 8 and 128 characters");
    //validate
  if (numChars === "" || numChars < 8 || numChars > 128) {
    prompt("Not a valid option. Please try again.");
  } 
  
  return numChars;
  
};

//function to collect char types 
var charTypeSelect = function() {

  var lower = prompt("Do you want to include lowercase alphabet characters?");
  if (lower === "yes" || lower === "YES" ) {
    //add lowercase string to possible outcomes
    characters += lowercase;
  } else {
    characters += "";
  }

  var upper = prompt("Do you want to include uppercase alphabet characters?");
  if (upper === "yes" || upper === "YES" ) {
    characters += uppercase;
  } else {
    characters += "";
  }

  var num = prompt("Do you want to include numeric characters?");
  if (num === "yes" || num === "YES" ) {
    characters += numeric;
  } else {
    characters += "";
  }
  
  var spec = prompt("Do you want to include any special characters? eg. !@#$%^&*_-+=");
  if (spec === "yes" || special === "YES" ) {
    characters += special;
  } else {
    characters += "";
  }

  return characters;
  
};

function generatePassword() {
  alert("Welcome to the Supersecurity Password Generator");
  alert("You will be guided through series of options to choose your password criteria");

  
  //call function to collect length
  var length = lenSelect();

  //call function to collect char types
  charTypeSelect(); //returns characters??

  //generate password the right length with the right number of char types
  var password = "";
  for (var i = 0; i < length; i++) {
    //add a random characters
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
