# Password Generator CLI

A command-line tool to generate secure, customizable passwords. Perfect for security-conscious users.

![CLI Demo](https://img.shields.io/badge/CLI-Node.js-green) 
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- 🔒 Generate passwords with customizable length (default: 8 chars)
- 🎚️ Three complexity levels available in CLI-password-generator-complex branch:
  - Lowercase letters (default)
  - Uppercase + lowercase letters (`--upper`)
  - Full complexity with letters, numbers & symbols (`--all`)
- 📄 Clear help documentation (`--help`)

## Installation

### Via npm (Global Install)
```bash
npm install -g CLI-password-generator
```
Via Git
```bash
git clone https://github.com/todayisthorsday/password-generator-cli.git
cd password-generator-cli
npm link
```
Usage
Basic Syntax

```bash
password-generator --generate [options]
```

Options

Flag	              Shorthand	      Description
--generate	        -g	            Generate a new password
--length <number>	  -l	            Set password length (default: 8)

For CLI-password-generator-complex Branch
Flag	            Shorthand	        Description
--upper	          -u	              Include uppercase letters
--all	            -a	              Include letters, numbers, and symbols
--help	          -h	              Show help message

License
This project is licensed under the MIT License - see the LICENSE file for details.

Security Note: While this tool generates secure passwords, always store passwords using a proper password manager.
