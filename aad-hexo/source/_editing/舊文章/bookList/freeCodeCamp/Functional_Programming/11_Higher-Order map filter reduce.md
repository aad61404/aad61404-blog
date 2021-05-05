https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem

Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = (arr) => {
  // only change code below this line
  var a = [...arr];
  a = a.filter(x=> x%1 == 0)
       .filter(x=> x>0)
       .map(x=> x*x);
  // console.log(a);
  return a;
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



solution2

const squareList = (arr) => {
  // only change code below this line
  arr = arr.filter(num => num >0 && num % parseInt(num) ==0)
            .map(num => Math.pow(num,2))
  return arr;
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


solution3

const squareList = (arr) => {
  // only change code below this line
  return  arr.reduce( (acc, num) => {
      return Number.isInteger(num) && num > 0 ?
      acc.concat(num * num) : acc
  },[]);
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
