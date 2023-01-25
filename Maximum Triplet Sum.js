/*Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .*/


function maxTriSum(numbers){
  const newNumber = Array.from(new Set(numbers));
  newNumber.sort((a, b) => b-a);
  console.log(newNumber)
  return newNumber[0] + newNumber[1] + newNumber[2]
}

/*function maxTriSum(numbers){
  return [...new Set(numbers)]
    .sort( (a,b) => a - b)
    .slice(-3)
    .reduce( (acc,el) => acc + el);
}*/
