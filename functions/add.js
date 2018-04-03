/* 
Add

Adds two or more values or an array of values

add(2, 3);         returns number 5
add(2, 3, 4);      returns number 9
add([2, 3, 4, 5]); returns number 14
*/

const add = (...args) => {
    if (args.length === 1 && Array.isArray(args[0])) {
        return args[0].reduce((x, y) => x + y);
    } else if (args.length === 2 && Array.isArray(args[0])) {
        return args[0].map(x => x + args[1]);
    } else if (args.length > 1) {
        return args.reduce((x, y) => x + y);
    } else {
        return 'Error: Too few arguments';
    }
};

module.exports = add;
