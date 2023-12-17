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

// Function to prompt user for password options
function getPasswordOptions() {
    let passwordLength;

    // until the user gives a valid input, this loop will repeat itself
    while (true) {
        // Prompt for password length
        passwordLength = prompt('Enter the desired password length (8-128)');
        // parsing to the integer, if possible, otherwise the result is null
        passwordLength = parseInt(passwordLength, 10);

        // check the valid input conditions
        // if number - it has to be between 8 and 128
        // if not number - invalid
        if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
            alert("Invalid input. Length must be between 8 and 128.");
        } else {
            // if the input is valid, break out of the loop
            break;
        }
    }

    // Confirm which character sets to use
    // If the user answers false for all, they will be alerted and asked again
    let includeNumbers, includeSpecialCharacters, includeUpperCase, includeLowerCase;
    while (true) {
        includeNumbers = confirm("Include numbers?");
        includeSpecialCharacters = confirm("Include special characters?");
        includeUpperCase = confirm("Include uppercase letters?");
        includeLowerCase = confirm("Include lowercase letters?");

        if (!includeNumbers && !includeSpecialCharacters && !includeUpperCase && !includeLowerCase) {
            alert("At least one character type must be selected.");
        } else {
            // if the input is valid, break out of the loop
            break;
        }
    }

    // add character sets that were confirmed to a new array - possibleCharacters
    let possibleCharacters = [];
    if (includeNumbers) possibleCharacters = possibleCharacters.concat(numericCharacters);
    if (includeSpecialCharacters) possibleCharacters = possibleCharacters.concat(specialCharacters);
    if (includeUpperCase) possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    if (includeLowerCase) possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);

    // return the object with key-pair valus for passwordLength value and possibleCharactes array
    return {
        passwordLength,
        possibleCharacters,
    }
}

// Function for getting a random element from an array

function getRandom(arr) {
    // get the random index of an array
    let randomIndex = Math.floor(Math.random() * arr.length);
    // return the element on the random index in the array
    return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword() {
    // call getPasswordOptions function and give the output to passwordOptions variable
    let passwordOptions = getPasswordOptions();

    // declare password variable as an empty string and add a random character from
    // the possible sets chosen by the user
    let password = '';
    for (let i = 0; i < passwordOptions.passwordLength; i++) {
        password += getRandom(passwordOptions.possibleCharacters);

    }
    
    // return a generated password 
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

