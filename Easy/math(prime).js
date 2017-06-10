// Is The Number A Prime?

// Create a function that returns true if a number is a prime, and false if it is not. A prime is a natural number that is only divisible by 1 and itself. 
// Examples:
// 7 => true
// 9 => false
// 10 => false

function isPrime(num){
  for (var i=2;i<num;i++){
    if (num%i==0){
      return false
    }
  }
  return true
}