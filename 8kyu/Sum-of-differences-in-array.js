// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//My solution

function sumOfDifferences(arr) {
    let res = 0;
    arr.sort((a, b) => b - a);
    res = arr.reduce((acc, item, index, arr) => {
        const next = arr[index + 1];
        if (!isNaN(item - next)) {
            acc += item - arr[index + 1];
        }
        return acc
    }, 0);

    return res
}