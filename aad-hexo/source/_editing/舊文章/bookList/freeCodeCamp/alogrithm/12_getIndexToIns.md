Basic Algorithm Scripting: Where do I Belong


basic 
sort(function (a,b) {
    return a-b;
})

延伸 concat , findIndexOf
indexOf ,

快速排序、泡沫排序、選擇排序
二元搜尋
https://blog.kdchang.cc/2016/09/27/javascript-data-structure-algorithm-sort-and-search/

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
   arr.sort(function(a,b) {
    return a-b; 
  })

  var ind=0;
  console.log(arr);
  for(var i=0; i<arr.length; i++) {
    if(arr[i] <num){
      ind ++;
    } else {
      return ind;
    }
  }
  console.log(ind);
  return ind;
}

getIndexToIns([40, 60], 50);
getIndexToIns([2, 5, 10], 15)



```
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}
```


```
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

```

function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);


```
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0;
  for (var i = 0; i < times; i++) {
    if (num > arr[i]) {
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}

getIndexToIns([40, 60], 50);
```

```
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);
```