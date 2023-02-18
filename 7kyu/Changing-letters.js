// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

//My solution

function swap(string) {
    let alph = 'eioau';
    let res = '';
    for (let i = 0; i < string.length; i++) {
        if (alph.indexOf(string[i]) != -1) {
            res += string[i].toUpperCase();
        } else {
            res += string[i];
        }
    }
    return res;
}