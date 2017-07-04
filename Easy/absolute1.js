// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// Example:
// [2, -1, 4, 8, 10] -> 25
// [-3, -4, -10, -2, -3] -> 22
// [2, 4, 6, 8, 10] -> 30
// [-1] -> 1

// Absolutely Sum

function getAbsSum(arr) {
    return arr.reduce((count, num) => count + Math.abs(num), 0)
}