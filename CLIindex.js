#!/usr/bin/env node

const process = require("node:process");
const userArgs = process.argv.slice(2);

const characters1 = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const characters2 = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const characters3 = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",
  "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
  "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

function generate() {
    let characters;
    if (userArgs.includes("--all") || userArgs.includes("-a")) {
        characters = characters3;
    } else if (userArgs.includes("--upper") || userArgs.includes("-u")) {
        characters = characters2;
    } else {
        characters = characters1;
    }

    let passwordString = "";
    for (let i = 0; i < 15; i++) {
        const index = Math.floor(Math.random() * characters.length);
        passwordString += characters[index];
    }
    console.log(`Generated Password: ${passwordString}`);
}

function printHelpMessage() {
    console.log()
    console.log("Password-generator usage options:");
    console.log("  -h, --help        Print this message");
    console.log("  -g, --generate    Generate a password");
    console.log()
    console.log("To increase password complexity please add one of the following to your command");  
    console.log("  -u, --upper       Include uppercase characters");
    console.log("  -a, --all         Include all characters (uppercase, numbers, symbols)");
    console.log()
}

if (userArgs.includes("--help") || userArgs.includes("-h")) {
  printHelpMessage();
} else if (userArgs.includes("--generate") || userArgs.includes("-g")) {
  generate();
} else {
  console.log("No valid arguments provided. Use `--help` for usage information.");
}