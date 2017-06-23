// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
// Examples
// "test" => "es"
// "testing" => "t"
// "middle" => "dd"
// "A" => "A"

// Return The Middle Character(s) In A String

function getMiddle(str) {
    return str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2);
}