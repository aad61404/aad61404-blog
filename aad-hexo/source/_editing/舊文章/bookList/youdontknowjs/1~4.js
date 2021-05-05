Hositing + 淺層複製

var b = { a: 13 , b: {c:22}};
var c = Object.assign({}, b);

b.a = 33;
console.log(b); //a: 33  b: {c: 44}

b.b.c = 44
console.log(b); //a: 33  b: {c: 44} 

console.log(b == c)
console.log(b === c)


淺層拷貝 shallow copy

var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = Object.assign(obj1);
obj2.b = 100;

console.log(obj1); // { a: 10, b: 20, c: 30 } <-- 沒被改到
console.log(obj2); // { a: 10, b: 100, c: 30 }
console.log(obj1 === obj2); // false
console.log(obj1.body === obj2.body); // false

深層拷貝 deep copy
var obj1 = { ee: 13, body: { a: 10 } };
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.body.a = 20;

console.log(obj1); // { body: { a: 10 } } <-- 沒被改到
console.log(obj2); // { body: { a: 20 } }
console.log(obj1 === obj2); // false
console.log(obj1.body === obj2.body); // false





Closure
function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
        )
    };
    
    return newArr;
}
var a = [1,3,4,2];
console.log(a);

var b = mapForEach(a, function(item){
    return item * 2;
});
console.log(a);
console.log(b);