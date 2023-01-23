/*Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2*/


const findMissing = (arr1, arr2) => {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]) return arr1[i];
  }
}

/* const sum = arr => arr.reduce((a, b) => a + b, 0);

const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);*/
