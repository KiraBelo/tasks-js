
/*Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.*/


function nicknameGenerator(name){
  if (name.length <= 3){
    return 'Error: Name too short';
  }
  let vowels = ["a","e","i","o","u"];
  if (vowels.indexOf(name[2]) != -1){
    return name.slice(0,4);
  };
  return name.slice(0,3);
}



/*function nicknameGenerator(name) {
  if(name.length <= 3) {return 'Error: Name too short';}
  return !/[aeiou]/i.test(name[2]) ? name.slice(0,3) : name.slice(0,4);
}*/
