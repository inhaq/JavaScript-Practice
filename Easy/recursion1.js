// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.  For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples

// 4 => 10
// 13 => 91
// 600 => 180300

// Add Up The Numbers From A Single Number

function addUp(num) {
  if (num === 1){
      return 1;
  } 
  return num + addUp(num - 1);
}