// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//My solution

function generateHashtag(str) {
    let res = '#';
    let s = str.split(' ');
    let check = str.replace(/\s/g, "");
    if (check.length === 0) {
        return false;
    }
    console.log(s)
    for (let i = 0; i < s.length; i++) {
        let word = s[i].split('');
        for (let j = 0; j < word.length; j++) {
            if (j === 0) {
                res += word[j].toUpperCase();
            } else {
                res += word[j].toLowerCase();
            }
        }
    }
    if (res.length > 140) {
        return false
    } else {
        return res;
    }
}