// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

//My solution

function sumStrings(first, second) {

    let x = first.split('');
    let y = second.split('');
    let bigger;
    let smaller;
    let res = [];
    let k = 0;
    let rev;


    if (x.length > y.length) {
        bigger = x;
        smaller = y;
    } else {
        bigger = y;
        smaller = x;
    }

    smaller = smaller.reverse();

    for (let i = smaller.length; i < bigger.length; i++) {

        smaller[i] = '0';
    }
    smaller = smaller.reverse();


    for (let j = bigger.length; j >= 0; j--) {
        if (parseInt(bigger[j]) + parseInt(smaller[j]) <= 9) {

            res[k] = String(parseInt(bigger[j]) + parseInt(smaller[j]));
            k++;
        } else if (parseInt(bigger[j]) + parseInt(smaller[j]) > 9) {
            if (j != 0) {
                res[k] = String((parseInt(bigger[j]) + parseInt(smaller[j])) % 10);
                bigger[j - 1] = String(parseInt(bigger[j - 1]) + 1);
                k++;
            } else {
                rev = String(parseInt(bigger[j]) + parseInt(smaller[j]));
                rev = rev.split('').join('');
                res[k] = rev;

            }
        }

    }

    return (BigInt(res.reverse().join(''))).toString();
}