// Silence President Trump!

// Congratulations, you're the new CTO of Twitter. You've received direct orders from Jack Dorsey to silence Donald Trump, but not by deleting his account. How is that possible? By removing every vowel from his tweets, essentially neutering him.
// Rules

// Create a function that takes a string as an argument. 
// Return a new string with all vowels removed.
// "y" is not considered a vowel.
// Examples

// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
// "Stupid nerds!" => "Stpd nrds!"
// "We're gonna build a wall!" => "W'r gnn bld  wll!"

function silenceTrump(str) {
    return str.replace(/[aeiou]/ig, '');
}