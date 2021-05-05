
Chunky MonkeyPassed

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

splice , slice 解法


mysolution
```
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var space = [];
  var n  = arr.length /size;

  for(var i=0; i< n; i++) {
    var txt = arr.splice(0, size);
    space.push(txt);
  }
  console.log(arr.length);
  console.log(arr);
  console.log(space);
  return space;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

```

官方 01
```
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var space = [];

  for(var i=0; i< arr.length; i+=size) {

    space.push(arr.slice(i, i+size));
  }
    return space;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
```


官方02
```
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
```