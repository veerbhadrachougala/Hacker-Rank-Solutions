
// Given a number n, for each integer i in the range from 7 to n inclusive, print one value per line as follows: If / is a multiple of both 3 and 5, print FizzBuzz
// If i is a multiple of 3 (but not 5), print Fizz.
// • If / is not a multiple of 3 or 5, print the value
// Function Description Complete the function fizzBuzz in the editor

// fizzBuzz has the following parameter(s): int n: upper limit of values to test
// Here's how it works:

// The function takes a single parameter n, which represents the upper limit of values to test.
// A for loop is used to iterate over each integer i in the range from 7 to n inclusive.
// Inside the loop, we use if and else if statements to check whether i is a multiple of 3, 5, or both. If i is a multiple of both 3 and 5, we print "FizzBuzz". If i is a multiple of 3 (but not 5), we print "Fizz". Otherwise, we print the value of i.
// The values are printed to the console, each on a separate line, using the console.log() function.
// To use the fizzBuzz function, you can simply call it with an argument representing the upper limit of values to test, like this:

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
     console.log('FizzBuzz');
   } else if (i % 3 === 0) {
     console.log('Fizz');
   }else if(i % 5 === 0) {
       console.log('Buzz');
   }else {
     console.log(i);
   }
 }

}
fizzBuzz(15);