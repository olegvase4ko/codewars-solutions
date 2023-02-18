// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//My solution

function toCamelCase(str) {
    if (str === '') { return '' }
    let res = '';
    let s = str.replace(/_/g, ' ').replace(/-/g, ' ').split(' ');
    res += s[0];
    for (let i = 0; i < s.length; i++) {
        if (i !== 0) {
            res += s[i].split('').map((i, index) => index === 0 ? i.toUpperCase() : i).join('')
            continue;
        }
    }
    return res
}