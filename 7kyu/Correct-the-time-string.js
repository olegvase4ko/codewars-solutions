// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

//My solution

function timeCorrect(t) {
    let str = correct(t);
    switch (str) {
        case null: { return null }
        case '': { return '' }
        default: {
            let res = '';
            let arr = str.split(':');
            let sec = +arr[2];
            let min = +arr[1];
            let hou = +arr[0];


            if (sec > 59) {
                min += Math.floor(sec / 60);
                sec = sec % 60;
            }
            if (min > 59) {
                hou += Math.floor(min / 60);
                min = min % 60;
            }
            if (hou === 24) {
                hou = 0;
            } else if (hou > 24) {
                hou = Math.floor(hou % 24);
            }

            res = `${zero(hou)}:${zero(min)}:${zero(sec)}`;
            console.log(res)
            return res
        }
    }
}

function correct(x) {
    if (x === null) {
        return null;
    } else if (x === '') {
        return '';
    }
    if (x.split(":").length === 3 && +x.split(":").join('')) {
        return x;
    }
    return null;
}

function zero(x) {

    let s = x.toString();
    if (s.length < 2) {
        return '0' + s;
    }
    return s;
}