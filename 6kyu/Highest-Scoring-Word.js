// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//My solution

function high(x) {
    let word = x.split(' ');
    let letter;
    let alph = "0abcdefghijklmnopqrstuvwxyz".split('');
    let res = [];
    let score = 0;

    for (let i = 0; i < word.length; i++) {
        letter = word[i].split('');
        for (let j = 0; j < letter.length; j++) {
            score += alph.indexOf(letter[j]);

        }
        res.push(score);
        score = 0;
    }

    return word[res.indexOf(Math.max.apply(null, res))]
}