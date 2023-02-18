// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

//My solution

function none(arr, fun) {
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return false;
        }
    }
    return true;
}