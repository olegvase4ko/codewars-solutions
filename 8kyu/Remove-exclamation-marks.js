// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//My solution

function removeExclamationMarks(s) {
    let str = s.split('');
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '!') {
            res.push(str[i]);
        }
    };
    return res.join('');
}