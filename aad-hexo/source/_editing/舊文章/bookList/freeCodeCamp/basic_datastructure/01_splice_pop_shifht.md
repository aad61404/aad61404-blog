unshift('I',2,true);  // 加到array最前面
push('IVV','ya');  //尾巴
pop()  去除尾巴
shift() 去除頭

splice(start , nums )  // 刪除 start = index start , nums  = 刪除幾個 
splice(start , nums , 2,3,4)  // 刪除座標index開始nums 位數 加上2 3 4 

slice(start, end )  // 複製 座標 start to end ,Copy Array Items Using slice()Passed 

copy array Machine
copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator


```
// pop , shift
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
```

//------------------
```
// unshift , push
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.
```


```
// pop + shift
function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

//-----------------------
```
// splice
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// only change code below this line
arr.splice(1,4);
// only change code above this line
console.log(arr);
```
//----------------
```
// splice(start, end, 2,3,4)
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0,2,"DarkSalmon","BlanchedAlmond")
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

```


```
// slice
// 1 
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

// 2
function forecast(arr) {
  // change code below this line
  let a = arr.slice(2,4)
  return a;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

```


https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator

Basic Data Structures: Copy an Array with the Spread Operator


Spread out 
```
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment , "is", "fun"]; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut()); // [ 'learning', 'to', 'code', 'is', 'fun' ]

```


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


https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];

  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

