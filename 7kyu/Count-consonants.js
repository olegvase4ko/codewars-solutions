// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//My solution

function consonantCount(str) {
    let count = 0;
    let s = str.split('');

    for (let i = 0; i < s.length; i++) {

        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === ' ' || s[i].toUpperCase() === s[i].toLowerCase()) {
            continue;
        } else {
            count++;
        }

    }

    return count;
}