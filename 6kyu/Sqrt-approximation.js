// We want to approximate the sqrt function. Usually this function takes a floating point number and returns another floating point number, but in this kata we're going to work with integral numbers instead.

// Your task is to write a function that takes an integer n and returns either

// an integer k if n is a square number, such that k * k == n or
// a range (k, k+1), such that k * k < n and n < (k+1) * (k+1).
// Examples
// assert.deepEqual( sqrtApproximation(4), 2 );
// assert.deepEqual( sqrtApproximation(5), [2,3] );
// Note : pow and sqrt functions are disabled.

// Remarks
// In dynamic languages, return either a single value or an array/list. In Haskell, use Either.

//My solution

function sqrtApproximation(n) {
    let res = [];
    if (n === 0) { return 0 }
    for (let i = 0; i <= n; i++) {
        if (i * i === n) {
            return i;
        } else {
            if ((i * i < n) && ((i + 1) * (i + 1) > n)) {
                res.push(i);
                res.push(i + 1);
                break;
            }
        }
    }
    return res;
}