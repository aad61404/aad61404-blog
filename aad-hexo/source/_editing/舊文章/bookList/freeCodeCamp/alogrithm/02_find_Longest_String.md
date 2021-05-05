
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string


Basic Algorithm Scripting: Find the Longest Word in a String

```
function findLongestWordLength(str) {
  var arr = str.split(' ');
  var arrLenth = [];
  arr.forEach(x => { arrLenth.push(x.length);})
 
  // console.log(arrLenth);
  console.log(Math.max(...arrLenth));
  return Math.max(...arrLenth);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```


solution 2 
```
function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
```

solution 3
```
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
``` 
solution 4 
```

``` 

