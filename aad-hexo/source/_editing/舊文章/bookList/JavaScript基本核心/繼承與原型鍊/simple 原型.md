---
title: simple 原型
date: 2019-12-10 18:00:00
categories: 
- JavaScript基本核心
- 繼承與原型鍊
tags:
- 繼承與原型鍊
---

1. 
```
function Animal(family) {
    this.kingdom = '動物界';
    this.family = family || '人科';
}
Animal.prototype.move = function () {
    console.log(this.name + ' 移動');
}

function Dog(name , color , size) {
    //  目前只繼承Animal 原型 沒繼承建構函式
    //  Animal.call(this, '狗科');
    this.name = name;
    this.color = color || '白色';
    this.size = size || '小';
}

Dog.prototype = Object.create(Animal.prototype);
// Dog原本繼承 Animal 時 constructor 被蓋掉
// Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log(this.name + '吠叫');
}

var Bibi = new Dog('比比', '棕色', '小');

console.log(Bibi.__proto__);
console.log(Bibi.__proto__.__proto__ );
console.log(Bibi.__proto__.__proto__.constructor);


```