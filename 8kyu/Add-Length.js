// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//My solution

function addLength(str) {
    let s = str.split(' ');
    let count = 0;
    let word;
    let res = [];
    for (let i = 0; i < s.length; i++) {
        word = s[i].split('');
        for (let j = 0; j < word.length; j++) {
            count++;
        }
        res.push(s[i] + ' ' + count);
        count = 0;
    }
    return res;
}