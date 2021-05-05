Functional Programming: Avoid Mutations and Side Effects Using Functional Programming


https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/avoid-mutations-and-side-effects-using-functional-programming

```
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  // fixedValue = fixedValue.splice(0);
  return fixedValue+1;
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

```

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