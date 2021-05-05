 https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method
 
 Functional Programming: Combine an Array into a String Using the join Method
 
function sentensify(str) {
  // Add your code below this line

  return str.split(/\W/).join(" ");
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

