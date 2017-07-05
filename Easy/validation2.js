// Create a function that accepts an array as an argument. Remove all duplicate items from the array and return the new array.

// Rules
// Remove duplicate items from array.
// New array should be sequentially the same as old array, minus duplicate items.

// Examples
// ["John", "Taylor", "John"] => ["John", "Taylor"]
// [1, 0, 1, 0] => [1, 0]
// ['The', 'big', 'cat'] => ['The', 'big', 'cat']

// Remove All Duplicates From An Array

const removeDups = arr => [...new Set(arr)]