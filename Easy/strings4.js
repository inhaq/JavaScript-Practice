// Create a function that takes a two strings and returns true if the first argument ends with the 2nd argument (also a string).
// Rules
// Take two strings as arguments.
// Determine if second string matches ending of first string.
// Return boolean value.
// Examples
// "abc", "bc" => true
// "abc", "d" => false
// "samurai", "zi" => false
// "feminine", "nine" => true
// "convention", "tio" => false

// Check If String Ending Matches Second String

function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}