https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs

Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {

    return title.toLowerCase().trim().split(/\s+/).join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
// console.log(winterComing);
console.log(urlSlug(" Winter Is   Coming"));


// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {

    return title.toLowerCase().split(/\W/).filter(x=> x!== '').join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
// console.log(winterComing);
console.log(urlSlug(" Winter Is   Coming"));

