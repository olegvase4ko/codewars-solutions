// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//My solution

function reverseLetter(str) {

    let res = []


    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] != parseInt(str[i]) && str[i].toLowerCase() !== str[i].toUpperCase()) {
            res.push(str[i]);
        } else {
            continue;
        }
    }
    return res.join('')
}