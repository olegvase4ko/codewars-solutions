// A cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle. That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
// A couple examples:
// 101
// 11111111011111111
// You must take an input, n, that will be in decimal format (base 10), then return True if that number wil be a cyclops number when converted to binary, or False if it won't.
// Assume n will be a positive integer.

// A test cases with the process shown:

// cyclops (5)
// """5 in biinary"""
// "0b101"
// """because 101 is made up of all "1"s with a "0" in the middle, 101 is a cyclops number"""
// return True

// cyclops(13)
// """13 in binary"""
// "0b1101"
// """because 1101 has an even number of bits, it cannot be a cyclops"""
// return False

// cyclops(17)
// """17 in binary"""
// "0b10001"
// """Because 10001 has more than 1 "0" it cannot be a cyclops number"""
// return False
// n will always be > 0.

//My solution

function cyclops(n) {
    let num = n.toString(2).split(''); //make a mass of binary numbers

    if (num.length === 1 || num.length % 2 === 0) { // if input number is 1 or if mass with an even numbers of characters return false
        return false;

    } else {

        for (let i = 0; i < Math.floor(num.length / 2); i++) { //going step by step to zero(middle)

            if (num[i] === num[num.length - 1 - i]) { // compare numbers on both sides, if true - coninue
                continue;
            } else {
                return false;
            }
        }
        return true; //aand if not false that's means true,you know ^^
    }
}