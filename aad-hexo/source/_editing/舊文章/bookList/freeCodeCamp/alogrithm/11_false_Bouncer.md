

Basic Algorithm Scripting: Falsy Bouncer

https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-falsy-bouncer/16014

function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);



// 搜尋
```
function bubbleSort (arr) {
  let toIndex = arr.length
  
  while (toIndex > 1) {
    toIndex--
    for (let i = 0; i < toIndex; i++) {
      // 如果前面的元素比後面的元素要大，則交換元素位置
      if (arr[i] > arr[i + 1]) {
        let tempValue = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tempValue
      }
    }
  }
  return arr
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4]))
// console.log(bubbleSort([20, 20, 31, 56, 1, 12, 12]))
// console.log(bubbleSort([3, -9, -12, -1, 8]))
```
