
// 善用 indexOf
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof
```
function quickCheck(arr, elem) {
  // change code below this line
  return arr.indexOf(elem) >= 0 ? true : false;
  // return arr.indexOf(elem)? true:false;

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

```


// 利用 indexOf 找出(filter) 裡面有的東西   push 進 新的array
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for(let i=0; i<arr.length;i++) {
    if(arr[i].indexOf(elem) == -1) newArr.push(arr[i]);
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));




// Object delete

```
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// change code above this line

console.log(foods);

```
