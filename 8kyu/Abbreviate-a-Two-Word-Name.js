// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//My solution

function abbrevName(name) {

    let f = name.split(' ')[0];
    let s = name.split(' ')[1];

    return f[0].toUpperCase() + '.' + s[0].toUpperCase()

}