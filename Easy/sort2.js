// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

// Examples
// 123 => 321
// 1254859723 => 9875543221
// 73065 => 76530

// Sort Numbers In Descending Order

function sortDecending(num) {
    return parseInt(num.toString().split('').sort().reverse().join(''));
}