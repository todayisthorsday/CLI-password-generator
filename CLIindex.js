#!/usr/bin/env node

const process = require('node:process');
const arguments = process.argv.slice(2);

// indexes of characters

const characters1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const characters2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const characters3 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// generate passwords function
function generate() {
    let passwordString = "";
    for (let i = 0; i < length; i++) { // loops through index according to the .length input
        if (arguments.includes("--generate")) {
            let index = Math.floor(Math.random() * characters1.length); // gets random number from index
            passwordString += characters1[index]; // changes index numbers to the content strings instead
            console.log(passwordString);
            }
        if (arguments.includes("--upper")) {
            } let index = Math.floor(Math.random() * characters2.length); // gets random number from index
            passwordString += characters2[index]; // changes index numbers to the content strings instead
            passOne.textContent = passwordString; // replaces blank space with generated password
            console.log(passwordString);
            }
        if (arguments.includes("--all")) {
             let index = Math.floor(Math.random() * characters3.length); // gets random number from index
            passwordString += characters3[index]; // changes index numbers to the content strings instead
            console.log(passwordString);
        }
    }

function printHelpMessage() {
    console.log("Usage: password-generator [options]");
    console.log("Options:");
    console.log("  -h, --help      Print this message");
    console.log("  -g, --generate  Generate a new password");
    console.log("  -u, --upper     Add upercase characters to the generated password");
    console.log("  -a, --all     Add uppercase, number, and symbol characters to the generated password");
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
