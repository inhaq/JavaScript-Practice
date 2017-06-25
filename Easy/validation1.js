// Your job is to create a function that accepts a string as its only argument. The function will return true if the email is valid and false if it's not. Super simple.

// Rules
// The string must contain an " @ " character.
// The string must contain a " . " character.
// The "@" character must have a minimum of one character in front of it.
// e@edabit.com is valid while @edabit.com is invalid.
// The " . " and the "@" must be in the appropriate places.
// hello.email@com is invalid while john.smith@email.com is valid.
// If the string passes these tests, it will be considered a valid email.

// Examples
// '@gmail.com' => false
// 'hello.gmail@com' => false
// 'gmail' => false
// 'hello@gmail' => false
// 'hello@edabit.com' => true
// '' => false (an empty string)

// Email validation can get more complicated than what we're going for here, but this challenge will satisfy 95% of use cases. If you're unsure of something, check out the lab tests to understand exactly what's being evaluated.

// Basic E-Mail Validation

function validateEmail(str) {
    return /.+@.+\..+/.test(str);
}