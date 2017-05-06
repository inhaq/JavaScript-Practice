// Create a function that accepts an array and returns the last item in the array. The array can contain any of JavaScript's five primitive data types.
// Number
// String
// Boolean
// Undefined
// Null
// Examples

// [1, 2, 3] => 3
// ['cat', 'dog', 'duck'] => 'duck'
// [true, false, true] => true

// Return The Last Item In An Array

function getLastItem(arr) {
    return arr[arr.length - 1];
}