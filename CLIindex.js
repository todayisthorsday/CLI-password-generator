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
  let passwordString = "";
  for (let i = 0; i < 8; i++) {
    let index = Math.floor(Math.random() * characters.length); // Random character index
    passwordString += characters[index]; // Append random character to password
  }
  console.log(`Generated Password: ${passwordString}`);
}

function printHelpMessage() {
  console.log("Usage: password-generator [options]");
  console.log("Options:");
  console.log("  -h, --help      Print this message");
  console.log("  -g, --generate  Generate a new password");
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
