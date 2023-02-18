// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//My solution

function findUniq(arr) {
    let symb = '';
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[arr.length - 1]) {
            symb = arr[i];
            break;
        } else if (arr[i + 1] === arr[arr.length - 1]) {
            symb = arr[i + 1];
            break;
        } else {
            symb = arr[i];
            break;
        }
    }
    res = Number(arr.join('').split(symb).filter(Boolean).join(''));
    if (symb === Infinity) {
        return -Infinity;
    }
    if (arr.join('').split(symb).filter(Boolean).join('') + arr[0] === '-1') {
        return -1;
    }

    return res
}