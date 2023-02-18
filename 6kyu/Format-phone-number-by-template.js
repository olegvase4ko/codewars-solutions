// Introduction
// You need to write a function that will format a phone number by a template.

// Task
// You're given number and string.

// If there are more digits than needed, they should be ignored

// if there are less digits than needed, should return Invalid phone number

// Examples
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
// (8123706890, "+## ### ### ##-##") => "Invalid phone number"
// (911, "###") => "911"
// (112, "+ () -") => "+ () -"

//My solution

function formatNumber(number, template) {
    let res = template.split('');
    let num = number.toString().split('');
    let j = -1;
    let count = 0;
    for (let k = 0; k < res.length; k++) {
        if (res[k] === '#') {
            count++;
        }
    }
    if (num.length < count) {
        return "Invalid phone number";
    } else {
        for (let i = 0; i < num.length; i++) {
            j += 1;
            for (j; j < res.length; j++) {
                if (res[j] === '#') {
                    res.splice(j, 1, num[i]);
                    break;
                }
            }
        }
    }
    return res.join('');
}