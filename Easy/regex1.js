// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Rules
// a, e, i, o, u are considered vowles (not y).
// Return an integer.
// Examples
// "Celebration" => 5
// "Palm" => 1
// "Prediction" => 4

// How Many Vowels?

function countVowels(str) {
    return str.match(/[aeiou]/g).length;
}