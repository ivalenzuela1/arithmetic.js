# Arithmetic.js

## Instructions

1. Clone down this repo.
1. Complete the functions for add, divide, multiply and subtract
1. Use node modules to require and export all the functions
1. We will add to this repo as we go!

## Functions - Part 1

### Add

- Adds two or more values
- Sum up a single array of values
- Takes an array and a value and adds that value to every item in the array and returns a **NEW array** (does not mutate)

```javascript
add(2, 3, 4, 5)     // returns 19
add([1, 5, 10])     // returns 16
add([1, 2, 3], 10)  // returns array [11, 12, 13]
```

### Subtract

- Subtracts two values
- Takes an array and a value and subtracts that value to every item in the array and returns a **NEW array** (does not mutate)

```javascript
subtract(10, 9)         // returns 1
subtract([1, 2, 3], 10) // returns array [-9, -8, -7]
```

### Divide

- Divides two values, `x / y` (x = numberator, y = denominator)
- Takes an array and a value and divides that value (as the denominator) to every item in the array and returns a **NEW array** (does not mutate)

```javascript
divide(2, 3)          // returns 0.6666666666666666
divide([1, 2, 3], 3)  // returns array [0.3333333333333333, 0.6666666666666666, 1]
```

### Multiply

- Adds two or more values
- Generates the product of single array of values
- Takes an array and a value and multiplies that value by every item in the array and returns a **NEW array** (does not mutate)

```javascript
multiply(4, 5.2);             // returns 20.8
multiply(2, 3, 4);            // returns 24
multiply([1, 2, 3, 4])        // returns 24
multiply([5, 10, 15, 20], 5)  // returns array [25, 50, 75, 100]
```

## Functions - Part 2