/*Kori Jackson
 *February 14, 2025
 * Comp 322 001
 * This program is a simple calculator that takes two numbers and an operator and returns the result in a table
 */
function calculate(x, op, y) {
    if (isNaN(x) || isNaN(y)) {
        return "Invalid input";
    }
    x = parseFloat(x);
    y = parseFloat(y);
    switch (op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        default:
            return "Invalid operator";
    }
}

document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

let max = 0;
let min = 0;
let total = 0;
let avg = 0;
let count = 0;

do {
    let x = prompt("Value of x");
    let op = prompt("Operator");
    let y = prompt("Value of y");
    let result = calculate(x, op, y);
    if(!(isNaN(result))){
        if(result > max){
            max = result;
        }
        if(result < min){
            min = result;
        }

        total += result;
        count++;
    }

    document.write("<tr><td>" + x + "</td><td>" + op + "</td><td>" + y + "</td><td>" + result + "</td></tr>");


}while (confirm("Continue?"));

document.write("</table>");

avg = total / count;

document.write("<br>");

document.write("<table>");
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");
