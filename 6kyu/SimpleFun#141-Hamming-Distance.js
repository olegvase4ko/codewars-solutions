// Task
// The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

// Example
// For a = 25, b = 87, the result should be 4

// 25: 00011001
// 87: 01010111
// The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

// Input/Output
// [input] integer a
// First Number. 1 <= a <= 2^20

// [input] integer b
// Second Number. 1 <= b <= 2^20

// [output] an integer
// Hamming Distance

//My solution

function hammingDistance(a, b) {
    let x = addZeros(a.toString(2));
    let y = addZeros(b.toString(2));
    let res = 0;
    for (let i = 0; i < x.length; i++) {
        res += x[i] ^ y[i];
    }

    return res
}

function addZeros(x) {
    let res = x;
    let howMuch = 32 - x.length;
    let zeros = '';
    for (let i = 0; i < howMuch; i++) {
        zeros += '0';
    }
    return zeros + x
}