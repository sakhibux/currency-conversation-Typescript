#! /usr/bin/env node
import { log } from 'console';
import inquirer from "inquirer";
let currencycovertor = {
    "USD": {
        "USD": 1,
        "EUR": 0.92,
        "PKR": 278
    },
    "EUR": {
        "USD": 1.88,
        "EUR": 1,
        "PKR": 300
    },
    "PKR": {
        "USD": 0.0036,
        "EUR": 0.0033,
        "PKR": 1
    },
};
// INPUT PROMT
const answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "PKR"],
        message: "Select your currency"
    },
    {
        name: "to",
        message: "select which currency convert?",
        type: "list",
        choices: ["USD", "EUR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
        choices: ["USD", "EUR", "PKR"]
    }
]);
const { from, to, amount } = answer;
// conversion
if (from && to && amount) {
    let result = currencycovertor[from][to] * amount;
    console.log(`your conversion form ${from} to ${to} is ${result}`);
}
else {
    log("Invalid input");
}
