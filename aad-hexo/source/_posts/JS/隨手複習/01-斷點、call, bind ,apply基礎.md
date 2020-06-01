---
title: 斷點、call, bind ,apply基礎
date: 2020-05-29 23:28:00
categories: 
- web前端
tags:
- JS 複習
- apply
- bind
- call
---



```
    var obj = {num:2};
    var obj2 = {num:5};
    var obj3 = {num: 8};
    var addTothis = function(a, b ,c) {
        return this.num + a + b + c;
    }
    // call
    console.log('call : ' + addTothis.call(obj,1,2,3));
    // apply
    addTothis.apply(obj2, [1,2,3]);
    console.log('apply : ' + addTothis.apply(obj2, [1,2,3]));
    // bind
    var bound = addTothis.bind(obj3);
    console.log('bind bound : ' + bound(1,2,3));
```


call : 8 <br />
apply : 11 <br />
bind bound : 14


call basic -1
```
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0)
    throw RangeError('Cannot create product "' + name + '" with a negative price');
  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

Food.prototype = new Product();

var cheese = new Food('feta', 5);
console.log(cheese)
```



call basic -2
```
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0)
    throw RangeError('Cannot create product "' + name + '" with a negative price');
  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
Food.prototype = new Product();

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}
Toy.prototype = new Product();

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```