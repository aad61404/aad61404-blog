
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers


Basic Algorithm Scripting: Finders KeepersPassed

solution 
```

function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

```

solution 2

```
function findElement(arr, func) {
  let num = 0;
  for(var i=0; i<arr.length; i++) {
    num = arr[i];
    if(func(num) == true){ return num;}
  }
  return undefined;
  // return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

```
solution 3

```
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

```