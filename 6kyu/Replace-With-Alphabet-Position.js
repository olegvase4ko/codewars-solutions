// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//My solution

function alphabetPosition(text) {
    let res = '';
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let mas = text.split(' ').join('').toLowerCase();
    for (let i = 0; i < mas.length; i++) {
        if (alph.indexOf(mas[i]) > -1) {
            res += alph.indexOf(mas[i]) + 1 + ' ';
        }
    }
    return res.substring(0, res.length - 1);
}