// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//My solution

function squareSum(num) {
    return num.reduce((acc, i) => acc += Math.pow(i, 2), 0)
}