
// Reverse The Order Of A String

// Create a function that takes a string as its argument and returns the string in reversed order.
// Examples
// "Hello World" => "dlroW olleH"
// "The quick brown fox." => ".xof nworb kciuq ehT"
// "Github is really helpful!" => "!lufpleh yllaer si tibadE"


function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');
}