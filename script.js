// Provided character arrays
var specialCharacters = [
    '@', '%', '+', '\\', '/',
    "'", '!', '#', '$', '^',
    '?', ':', ',', ')', '(',
    '}', '{', ']', '[', '~',
    '-', '_', '.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
];


// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options

function getPasswordOptions() {
    let passwordLength;
    while (true) {
        // Prompt for password length
        passwordLength = prompt('Enter the desired password length (8-128)');
        passwordLength = parseInt(passwordLength, 10);
        // At least 8 characters, no more than 128 characters
        // Conditional to check that the number that was entered is in range
        // Prompts store data as strings, so need to parse into a number
        // If the user's input is out of range, either return out of the function or call the function again
        if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
            alert("Invalid input. Length must be between 8 and 128.");
        } else {
            break;
        }
    }

    // Confirm which character sets to use
    // If the user answers false for all, either return out of the function or call the function again
    let includeNumbers, includeSpecialCharacters, includeUpperCase, includeLowerCase;
    while (true) {
        includeNumbers = confirm("Include numbers?");
        includeSpecialCharacters = confirm("Include special characters?");
        includeUpperCase = confirm("Include uppercase letters?");
        includeLowerCase = confirm("Include lowercase letters?");

        if (!includeNumbers && !includeSpecialCharacters && !includeUpperCase && !includeLowerCase) {
            alert("At least one character type must be selected.");
        } else {
            break;
        }
    }

    // Once they select a character set
    // Generate a random character for each selected character set
    // Either push selected character sets to a mega-array of all selected characters
    // OR you can keep the arrays separate and generate a random number to select the array and another to select the index

    // Once character sets are selected, move on to generating random characters

   let possibleCharacters = []; 
   if (includeNumbers) possibleCharacters =  possibleCharacters.concat(numericCharacters);
   if (includeSpecialCharacters) possibleCharacters = possibleCharacters.concat(specialCharacters);
   if (includeUpperCase) possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
   if (includeLowerCase) possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);

   return {
    passwordLength, 
    possibleCharacters,
   }
}

// Function for getting a random element from an array

function getRandom(arr) {
    
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
    // Need a variable to hold the password as it's being generated

    // Need a variable to hold the index that's being generated

    // For loop that loops the number of times that matches the length the user chose
    // Generate a random number
    // That number is the index for a character in the mega-array
    // So then, mega-array[generated-index] is the actual character
    // Add that character to the password

    // Once we finish the for loop, return the generated password

}

// Function to generate password with user input
function generatePassword() {
let passwordOptions = getPasswordOptions();
let password = '';
console.table(passwordOptions);
for (let i = 0; i < passwordOptions.passwordLength; i++) {
    password += getRandom(passwordOptions.possibleCharacters);
    
}
console.log(password);
return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

