/* 
Subtract

- Subtracts two values
- Takes an array and a value and subtracts that value to every item in the array and returns a **NEW array** (does not mutate)
*/

const subtr = (a,b) => {
    if (a && b && Array.isArray(a)) {
        return a.map((item) => item - b)
    } else if (a && b) {
        return a - b;
    } else {
        return "error";
    }
}
module.exports = subtr;