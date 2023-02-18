// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Good Luck!

//My solution

function convertHashToArray(hash) {
    let res1 = [];
    let res = [];
    let keys = Object.keys(hash);

    for (let i = 0; i < keys.length; i++) {
        res1.push(keys[i]);
        res1.push(hash[keys[i]]);
        res[i] = res1;
        res1 = [];
    }

    return res.sort()
}