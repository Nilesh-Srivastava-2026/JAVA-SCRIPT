// Build A Simple Calculator using JavaScript
let a = Number(prompt("Enter the First Value =  "));
let b = Number(prompt("Enter the Second Value = "));
let user = prompt("Enter Symbols of (+ , - , * , / , %) = ");
switch (user) {
    case '+':
        console.log("Your a+b Value Result is :", a + b);
        break;
    case '-':
        console.log("Your a-b Value Result is :", a - b);
        break;
    case '*':
        console.log("Your a*b Value Result is :", a * b);
        break;
    case '/':
        console.log("Your a/b Value Result is :", a / b);
        break;
    case '%':
        console.log("Your a%b Value Result is :", a % b);
        break;
    default:
        console.log("Your entered value is not matched by the system / Invalid Value!");
}
console.log("Thank You For Your Given Time!");
