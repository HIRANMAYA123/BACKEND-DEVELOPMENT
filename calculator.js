// calculator.js

console.log("=== Calculator Started ===");

const args = process.argv.slice(2);

console.log("CLI Arguments:", args);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

console.log("Operation:", operation);
console.log("Number 1:", num1);
console.log("Number 2:", num2);

if (!operation || args.length < 3) {
    console.log("Error: Please provide operation and two numbers.");
    console.log("Example: node calculator.js add 10 5");
    process.exit(1);
}

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Both values must be valid numbers.");
    process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
    case "add":
        result = num1 + num2;
        break;

    case "subtract":
        result = num1 - num2;
        break;

    case "multiply":
        result = num1 * num2;
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;

    default:
        console.log("Error: Invalid operation.");
        console.log("Available operations: add, subtract, multiply, divide");
        process.exit(1);
}

console.log("Result:", result);
console.log("=== Calculator Finished ===");
