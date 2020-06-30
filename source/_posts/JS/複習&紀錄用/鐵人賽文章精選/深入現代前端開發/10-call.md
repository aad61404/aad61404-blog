---
title: 鐵人賽精選文章(深入現代前端開發)-10-call
date: 2020-06-24 16:28
categories: 
- web前端
tags:
- 鐵人賽精選文章
- 10-call
- 深入現代前端開發
---


# call
#JS/複習/call
[Function.prototype.call - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/call)


使用 call 來呼叫匿名的函數
```
var animals = [
  {species: ‘Lion’, name: ‘King’},
  {species: ‘Whale’, name: ‘Fail’}
];

for (var i = 0; i < animals.length; i++) {
  (function (i) { 
    this.print = function () { 
      console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
    } 
    this.print();
  }).call(animals[i], i);
}

```

使用 call 來串接物件上的建構子
```
function Product(name, price) {
    this.name = name;
    this.price = price;

    if(price < 0) throw RangeError('Cannot create product"'+name+'"with a new negative price');
    return this;
}

function Food(name, price){
    Product.call(this, name, price);
    this.category = 'food';
}
Food.prototype = new Product();

function Toy(name, price){
    Product.call(this, name, price);
    this.category= 'toy';
}
Toy.prototype = new Product();

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40)
```