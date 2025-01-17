/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var i;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  for(i=0; i<str2.length; i++){
    if(str1.includes(str2[i])){
      str1 = str1.replace(str2[i], '');
    }else{
      return false;
    }
  }

  if(str1.length > 0)
      return false;
  return true;

}

module.exports = isAnagram;
