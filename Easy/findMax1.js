// Find The LARGEST Number In An Array

// Create a function that takes an array of numbers. Return the largest number in the array.
// Examples
// [4, 5, 1, 3] => 5
// [300, 200, 600, 150] => 600
// [1000, 1001, 857, 1] => 1001

function findLargestNum(arr) {
    return Math
        .max
        .apply(null, arr);
}
