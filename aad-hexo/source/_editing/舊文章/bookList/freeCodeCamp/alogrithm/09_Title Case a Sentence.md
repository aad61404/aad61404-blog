
Basic Algorithm Scripting: Title Case a Sentence


https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence




```
function titleCase(str) {
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase().split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  }
  console.log(str);
  return str.join(' ');
}

titleCase("I'm a Little tea pot");
```


let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."


function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%



```
function titleCase(str) {
    str = str.toLowerCase();
   str = str.split(' ');
  for(var i =0; i<str.length; i++) {
    str[i] = str[i].split(''); 
    str[i][0] =  str[i][0].toUpperCase();
    str[i] = str[i].join('');
  }
  str = str.join(' ');
  // console.log(str);
  return str;
}

titleCase("I'm a little tea pot");

```