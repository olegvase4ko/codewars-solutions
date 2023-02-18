// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//My solution

function solution(str, ending) {

    let end = ending.split('');
    let start = str.split('');

    if (str === ending) {
        return true;
    } else if (end.length >= start.length) {
        return false;

    } else {

        for (let i = end.length; i <= start.length; i++) {

            for (let j = 0; j <= end.length; j++) {

                if (start[start.length - 1 - i + 1 + j] === end[j]) {
                    break;
                } else {

                    return false;
                }

            }
            return true;

        }

    }
}