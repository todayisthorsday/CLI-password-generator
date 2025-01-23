#!/usr/bin/env node

const process = require('node:process');
const arguments = process.argv.slice(2);

// indexes of characters

const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// generate passwords function
function generate() {
    let passwordString = "";
    for (let i = 0; i < 8; i++) { // loops through index according to the .length input
        if (arguments.includes("--generate")) {
            let index = Math.floor(Math.random() * characters.length); // gets random number from index
            passwordString += characters[index]; // changes index numbers to the content strings instead
            console.log(passwordString);
        }
    }
}

function printHelpMessage() {
    console.log("Usage: password-generator [options]");
    console.log("Options:");
    console.log("  -h, --help      Print this message");
    console.log("  -g, --generate  Generate a new password");
}

if (arguments.includes('--generate') || arguments.includes("-g")) {
    generate();
}
else if (arguments.includes('--help') || arguments.includes("-h") || arguments.includes('help')) {
    printHelpMessage();
}
else {
    console.log('No valid arguments provided. Use `--help` for usage information.');
}

    function handleArguments(userArguments) {
        if (userArguments.length === 0) {
            printHelpMessage();
            return;
        }
    }
