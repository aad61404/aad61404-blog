
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/pass-arguments-to-avoid-external-dependence-in-a-function

Functional Programming: Pass Arguments to Avoid External Dependence in a Function
````
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (num) {

  return num+1;
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
````