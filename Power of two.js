/*Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false*/

function isPowerOfTwo(n){
   return Math.log2(n) % 1 === 0 ? true : false;
}

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

function isPowerOfTwo(n) {
  let result = 0;
  if (n === 0) return false;
  if (n === 1 || n === 2) return true;
  for (let i = 2; i < n; i *= 2) {
    result = i * 2;
  }
  return n === result;
}
