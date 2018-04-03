/* 
Divide

- Divides two values, `x / y` (x = numerator, y = denominator)
- Takes an array and a value and divides that value (as the denominator) to every item in the array and returns a **NEW array** (does not mutate)
*/


const divide = (...args) => {
    if (args.length === 1 && Array.isArray(args[0])) {
        return args[0].reduce((x, y) => x / y);
    }
    
    if (args.length === 2 && Array.isArray(args[0])) {
        return args[0].map((x) => x / args[1]);
    }
    
    if (args.length > 1) {
        return args.reduce((x, y) => x / y);
    }
    
    return 'Error with arguments';
};


module.exports = divide;