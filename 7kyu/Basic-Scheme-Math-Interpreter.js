// Scheme Reference

// Your challenge: create a function that interprets simple scheme-like math commands and returns the value resulting from the operation. We will only be working with the four main math operators (+ - * /). The main difference between these commands and actual scheme commands is that scheme commands only accept two arguments while these commands accept infinitely many arguments so as to avoid having to nest functions with like operators.

// Input: string, such as '(+ 4 3)'
// Output: number
// Constraints: 0-15 arguments, numbers from -15 to 15 (when dividing, those will never be 0)
// Edge Cases: don't forget that no arguments results in either 0 or 1 for +/- and * respectively
// Syntax consists of an open parenthesis, a math operator, a space, space-separated arguments, and a close parenthesis. Example: (+ 3 4). All inputs will be valid.

// If no arguments are provided, return the following (You won't get '(/)'):

// '(+)'         // 0
// '(-)'         // 0
// '(*)'         // 1
// Examples of valid commands:

// '(+ 3 4)'     // 7
// '(- 3 4)'     // -1
// '(* 3 4)'     // 12
// '(/ 3 4)'     // 0.75
// '(+ 4 4 -4)'  // 4

//My solution

function scheme(cmd) {
    let operator = cmd.split('')[1];
    let operand = [];
    let mas = cmd.split(' ');
    for (let i = 0; i < mas.length; i++) {
        if (isNaN(parseInt(mas[i])) === false) {
            operand.push(parseInt(mas[i]));
        }
    }



    for (let j = 0; j < operand.length; j++) {
        operand[j] = parseInt(operand[j]);

    }

    //console.log(cmd);
    switch (operator) {

        case '+':
            if (operand.length == 0) {
                return 0;
            } else {
                let sum = 0;
                operand.forEach(element => sum += element);

                console.log(operand);
                return sum;

            }
            break;

        case '-':
            if (operand.length == 0) {
                return 0;
            } else {
                let razn = operand[0] * 2;
                operand.forEach(element => razn -= element);
                //   console.log(operand);
                return razn;
            }
            break;

        case '*':
            if (operand.length == 0) {
                return 1;
            } else {
                let mul = 1;
                operand.forEach(element => mul *= element);
                return mul;
            }
            break;

        case '/':
            if (operand.length == 0) {
                return 1;
            } else {
                let div = operand[0] * operand[0];
                operand.forEach(element => div /= element);

                return div;
            }
            break;


    }


}