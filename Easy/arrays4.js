// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
// Examples
// ["Ryan", "Kieran", "Jason", "Matt"] => ["Ryan", "Matt"]
// ["Tomato", "Potato", "Pair"] => ["Pair"]
// ["Kangaroo", "Bear", "Fox"] => ["Bear"]

// Return The Four Letter Strings

function isFourLetters(arr) {
    return arr.filter(x => x.length === 4);
}