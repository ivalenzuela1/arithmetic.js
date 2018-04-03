/* 
Multiply

- Multiply two or more values
- Generates the product of single array of values
- Takes an array and a value and multiplies that value by every item in the array and returns a **NEW array** (does not mutate)
*/

const multiply = (...args) => {
    if (args.length === 1 && Array.isArray(args[0])) {
        return args[0].reduce((x, y) => x * y);
    }
    
    if (args.length === 2 && Array.isArray(args[0])) {
        return args[0].map((x) => x * args[1]);
    }
    
    if (args.length > 1) {
        return args.reduce((x, y) => x * y);
    }
    
    return 'Error with arguments';
};


module.exports = multiply;