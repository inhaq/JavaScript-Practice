// Create a function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.

// Examples
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => "(123) 456-7890"
// [5, 1, 9, 5, 5, 5, 4, 4, 6, 8] => "(519) 555-4468"
// [3, 4, 5, 5, 0, 1, 2, 5, 2, 7] => "(345) 501-2527"

// Phone Number Formatting

function formatPhoneNumber(numbers) {
    numbers.splice(6, 0, "-");
    numbers.splice(3, 0, ") ");
    numbers.splice(0, 0, "(");
    return numbers.join('');
}