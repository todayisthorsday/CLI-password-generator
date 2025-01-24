#!/usr/bin/env node

const process = require("node:process");
const userArgs = process.argv.slice(2);

// indexes of characters

const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// generate passwords function
function generate() {
    let length = 8;

    const lengthIndex = userArgs.findIndex(arg => arg === "--length" || arg === "-l");
    if (lengthIndex !== -1) {
        const requestedLength = parseInt(userArgs[lengthIndex + 1]); // Validate length
        
        if (!isNaN(requestedLength) && requestedLength > 0) {
            length = requestedLength;
        } else {
            console.log("Invalid length. Using default 8 characters.");
        }
    }

 let passwordString = "";
    for (let i = 0; i < length; i++) { 
        const index = Math.floor(Math.random() * characters.length);
        passwordString += characters[index];
    }
    console.log(`Generated Password: ${passwordString}`);
}

function printHelpMessage() {
    console.log()
    console.log("Password-generator usage options:");
    console.log("  -h, --help          Print this message");
    console.log("  -g, --generate      Generate a password");
    console.log("  -l, --length <n>    Set password length (default: 8)"); 
    console.log()
}

if (userArgs.includes("--generate") || userArgs.includes("-g")) {
  generate();
} else if (
  userArgs.includes("--help") ||
  userArgs.includes("-h") ||
  userArgs.includes("help")
) {
  printHelpMessage();
} else {
  console.log(
    "No valid arguments provided. Use `--help` for usage information."
  );
}

function handleArguments(userArguments) {
  if (userArguments.length === 0) {
    printHelpMessage();
    return;
  }
}
