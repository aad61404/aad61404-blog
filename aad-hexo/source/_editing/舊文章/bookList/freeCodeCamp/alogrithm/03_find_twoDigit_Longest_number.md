Basic Algorithm Scripting: Return Largest Numbers in Arrays

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

mysolution 1
```
function largestOfFour(arr) {
  // You can do this!
  var arrMax = [];
  for(var i =0; i < arr.length; i++){
      arrMax.push(Math.max(...arr[i]));
  }
//   Math.max(...arr)
  return arrMax;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```


solution 2 
```
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}
```


solution 3 
```
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
```

solution 4 
```
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
```