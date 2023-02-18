// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//My solution

var uniqueInOrder = function (iterable) {
    if (typeof (iterable) === 'string') {
        iterable = iterable.split('');
    }
    let res = iterable.map(function (elem, index, mas) {
        if (elem !== mas[index + 1]) {
            return elem;
        }
        return 0
    })
    return res.filter(i => i !== 0)
}