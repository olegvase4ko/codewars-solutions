// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

//My solution

function getSumOfDigits(i) {
    return i.toString().split('').map(curr => +curr).reduce((a, i) => a += i)

}