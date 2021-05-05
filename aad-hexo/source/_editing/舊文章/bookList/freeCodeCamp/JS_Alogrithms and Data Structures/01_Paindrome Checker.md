https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

JavaScript Algorithms and Data Structures Projects: Palindrome Checker

function palindrome(str) {
  // Good luck!
  var oriStr = str;
  // oriStr = oriStr.split(/\W/).reverse().join('');
  oriStr = String(oriStr.split(''));
  oriStr = oriStr.toLowerCase().split(/\W|\_/).reverse().join('');
  str = str.toLowerCase().split(/\s|\W|\_/).join('');
  console.log('oriStr :' +oriStr);
  console.log('str :' +str);
  return oriStr == str ? true : false;
}

// palindrome("_eye")
palindrome("0_0 (: /-\ :) 0-0");



solution2 

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}