// Assignment Code

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase;
var numeric = "0123456789";
var special = "!@#$%^&*_-+=";


var generateBtn = document.querySelector("#generate"); //class btn

//function to collect length
var lenSelect = function() {
  var numChars = prompt("Enter a length for your password. You may choose a number between 8 and 128 characters");
    //validate
  if (numChars === "" || numChars < 8 || numChars > 128) {
    prompt("Not a valid option. Please try again.");
  } else {
    return numChars;
  }
};

//function to collect char types 
//what does it return?
var charTypeSelect = function() {

  var characters = "";
  
  //var charTypeChoices = [lowercase, uppercase, numeric, special];



  //prompt "do you want lowercase?"
  //collect choice yes or no
  if true
  characters += lowercase;


  //prompt for more "do you want uppercase"
  //collect choice

  //prompt numeric
  //var numeric = [0,1,2,3,4,5,6,7,8,9];

  //prompt special
  //special is any symbol found on a standard US keyboard
  // " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  // special char to allow " in string

  
};

function generatePassword() {
  alert("Welcome to the Supersecurity Password Generator");
  alert("You will be guided through series of options to choose your password criteria");

  
  //call function to collect length
  var length = lenSelect();

  //call function to collect char types
  charTypeSelect();

  //generate password the right length with the right number of char types
  
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
