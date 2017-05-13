// Create a function that returns all values in an array that aren't' odd.
// Rules
// Return all valid numbers (even) in the order they were given.
// Examples
// [1, 2, 3, 4, 5, 6, 7, 8] => [2, 4, 6, 8]
// [43, 65, 23, 89, 53, 9, 6] => [6]
// [718, 991, 449, 644, 380, 440] => [718, 644, 380, 440]

// Eliminate All Odd Numbers Within An Array

function noOdds(arr) {
    return arr.filter(a => !(a % 2));
}