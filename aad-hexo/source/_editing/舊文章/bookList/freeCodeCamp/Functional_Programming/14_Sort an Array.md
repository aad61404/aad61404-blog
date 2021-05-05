https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method


Functional Programming: Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}
// ascendingOrder([1, 5, 2, 3, 4]);
// console.log(ascendingOrder([1, 5, 2, 3, 4]));
// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// function alphabeticalOrder(arr) {
//   // Add your code below this line
//   return arr.sort(function(a,b){
//     return a-b;
//   });

//   // Add your code above this line
// }
// // alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
      if(a === b) { return 0; }
      else if (a > b) { return 1;}
      else {return -1;}
  });
}


function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
