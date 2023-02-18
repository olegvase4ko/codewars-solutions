// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//My solution

function pigIt(str) {
    let mas = str.split(' ');
    let res = [];
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] === '!' || mas[i] === '?') { res.push(mas[i]); continue; }
        let first = mas[i].split('').shift();
        res.push(mas[i].substring(1) + first + 'ay');
    }
    return res.join(' ')
}