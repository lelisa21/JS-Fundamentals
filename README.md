# $$<\code\>$$
# JS-Fundamentals
This project focuses on learning the fundamentals of JavaScript, covering basic syntax, control structures, functions, and command-line argument handling.

## 📋 Project Overview
***
The repository contains various JavaScript scripts that demonstrate core programming concepts including:
- Variable declarations and data types
- Conditional statements
- Loops and iterations
- Function definitions and recursion
- Command-line argument processing
- Array manipulation and string operations

## 🚀 Installation & Setup

1. **Prerequisites**: Ensure you have Node.js installed on your system
   ```bash
   node --version
   npm --version
   ```

2. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd js-fundamentals
   ```

## 📝 Usage Examples

### Factorial Calculation Script
```javascript
const num = parseInt(process.argv[2]);

function factorial(number) {
  if (number === 0 || number === 1) return 1;
  if (number < 0 || isNaN(number)) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(num));
```

**Run the script:**
```bash
node factorial.js 5    # Output: 120
node factorial.js 0    # Output: 1
node factorial.js      # Output: 1 (no argument provided)
```
---
### Additional Script Examples

**Square Pattern Generator:**
```javascript
const size = parseInt(process.argv[2]);

if (isNaN(size)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        console.log('X'.repeat(size));
    }
}
```

**Argument Handler:**
```javascript
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
```

## 🏗️ Project Structure

```
js-fundamentals/
├── 3-value_arguments.js         # Command-line argument handling
├── 8-square.js            # Pattern generation with loops
├── 9-add.js          # Basic function implementation
├── 10-factorial.js          # Recursive factorial calculation
└── README.md           # Project documentation
```

## 📊 Example Outputs

```
# Square pattern (size 3)
XXX
XXX
XXX

# Multi-language output
C is fun
Python is cool
JavaScript is amazing

# Factorial examples
Input: 5 → Output: 120
Input: 0 → Output: 1
Input: (none) → Output: 1
```

## 🛠️ Development Notes

- All scripts use modern JavaScript (ES6+) syntax
- No external dependencies required
- Each script is self-contained and executable
- Focus on clean, maintainable code patterns

## 📚 Further Learning

This project serves as a foundation for more advanced JavaScript concepts including:
- Asynchronous programming (Promises, async/await)
- Object-oriented programming in JavaScript
- Module systems (CommonJS, ES6 modules)
- Testing frameworks (Jest, Mocha)
- Web development (Node.js, Express)

---

