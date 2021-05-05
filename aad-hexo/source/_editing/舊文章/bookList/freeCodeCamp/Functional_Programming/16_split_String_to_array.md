https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method

Functional Programming: Split a String into an Array Using the split Method


/\W/ Matches any non-word character. This includes spaces and punctuation, but not underscores. It’s equivalent to /[^A-Za-z0-9_]/. For more information about Regular Expressions,

function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
splitify("Hello World,I-am code");


function splitify(str) {
  // Add your code below this line
  var output = str.split(/\d|-|\s|,|\./)
  console.log(output);
  return output;
  // Add your code above this line
}
splitify("Hello World,I-am code");
