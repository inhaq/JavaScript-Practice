// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
// Examples

// "This is a title" => "This Is A Title"
// "capitalize every word" => "Capitalize Every Word"
// "I Like Pizza" => "I Like Pizza"
// "PIZZA PIZZA PIZZA" => "PIZZA PIZZA PIZZA"

// Capitalize The First Letter Of Each Word

function makeTitle(str) {
    return str
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}