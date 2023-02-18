// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

//My solution

function alphanumeric(string) {
    console.log(string)
    if (string.length === 0) {
        return false;
    } else {
        if (string.split('')[0] === '\n' || string.split('')[0] === '&') { return false }
        for (let i = 0; i < string.length; i++) {
            if (string[i] === '_' || string[i] === ' ' || string[i] === '!') {
                return false;
            }
        }
        return true;
    }

}