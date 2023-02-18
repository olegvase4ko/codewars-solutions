// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//My solution

function isVow(a) {
    let res = a;
    let symb = '';
    for (let i = 0; i < a.length; i++) {
        symb = String.fromCharCode(a[i]);
        switch (symb) {
            case 'a': res.splice(i, 1, symb)
                break;
            case 'e': res.splice(i, 1, symb)
                break;
            case 'i': res.splice(i, 1, symb)
                break;
            case 'o': res.splice(i, 1, symb)
                break;
            case 'u': res.splice(i, 1, symb)
                break;
        }
    }
    return res
}