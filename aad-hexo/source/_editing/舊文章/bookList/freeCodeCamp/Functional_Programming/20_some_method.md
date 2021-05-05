https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria

Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria

function checkPositive(arr) {
  // Add your code below this line
  return arr.some(function(current){
    return current > 0 ? true : false;
  })

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]));
