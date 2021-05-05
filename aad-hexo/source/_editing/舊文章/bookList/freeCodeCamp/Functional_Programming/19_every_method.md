https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria

Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria


function checkPositive(arr) {
  // Add your code below this line
  return arr.every(function(current) {
    return current > 0 ? true : false;
  })

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]));
