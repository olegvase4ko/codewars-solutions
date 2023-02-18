// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My solution

function findAverage(arr) {
    return (arr.reduce((acc, item) => acc += item, 0)) / arr.length || 0
}