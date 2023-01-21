/* In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
  16
+ 18
______
 214
*/

function add(num1, num2) {
  const arr1 = num1.toString().split('').reverse();
  const arr2 = num2.toString().split('').reverse();
  let max = Math.max(arr1.length, arr2.length);
  let str = [];
  for (let i = 0; i < max; i++){
    let sum = parseInt(arr1[i] || 0) + parseInt(arr2[i] || 0);
    str.push(sum);
  }
 
  return parseInt(str.reverse().join(""));
}
