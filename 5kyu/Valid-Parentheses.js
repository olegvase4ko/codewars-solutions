// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

//My solution

function validParentheses(parens) {
    let open = 0;
    let mas = parens.split('');
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] === '(') {
            open++;
        } else {
            open--;
            if (open < 0) { return false }
        }
    }
    return open === 0 ? true : false;
}