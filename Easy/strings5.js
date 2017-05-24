// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples
// "String" => "SSttrriinngg"
// "Hello World!" => "HHeelllloo  WWoorrlldd!!"
// "1234!_ " => "11223344!!__  "

// Repeating Letters

function doubleChar(str) {
    return str.split('').map(x => x + x).join('');
}
