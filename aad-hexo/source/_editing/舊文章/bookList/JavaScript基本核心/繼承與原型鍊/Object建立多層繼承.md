---
title: Object建立多層繼承
date: 2019-12-10 18:00:00
categories: 
- JavaScript基本核心
- 繼承與原型鍊
tags:
- 繼承與原型鍊
---

1. 
```
var a = [];
// Object > Array > a (實體)

function Dog(name , color , size) {
    this.name = name;
    this.color = color;
    this.size = size;
}
var Bibi = new Dog('比比','棕色','小');
console.log(Bibi)
// Object > Dog > Bibi (實體)
// Object > Animal > Dog > (實體)
// Object > Animal > Cat
// Object > Animal > human

```

2. 
```
function Dog(name , color , size) {
    this.name = name;
    this.color = color;
    this.size = size;
}
var Bibi = new Dog('比比','棕色','小');

// Object.create()
var Pupu = Object.create(Bibi);
Pupu.name = '噗噗'
console.log(Pupu);


```

function Animal(family) {
    this.kingdom = '動物界';
    this.family = family || '人科';
}
Animal.prototype.move = function () {
    console.log(this.name + ' 移動');
}

function Dog(name, color , size) {
    // ****
	Animal.call(this, '犬科');
    this.name = name;
    this.color = color || '白色';
    this.size = size || '小';
}
// ****prototype  =  Object.create(Animal);
Dog.prototype = Object.create(Animal.prototype);
// ****part 2 原本有的屬性內容補上
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log(this.name + ' 吠叫');
}


var Bibi = new Dog('比比', '棕色', '小');
console.log(Bibi);
Bibi.bark();
Bibi.move();

// ****part 2
var newAnimal = new Animal('新物種');
console.log(newAnimal);

```



3. 貓
```

function Cat(name, color, size) {
    Animal.call(this, '貓科');
    this.name = name;
    this.color = color || '白色';
    this.size = size || '小';
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.meow = function() {
    console.log(this.name + ' 喵喵叫');
}

var Kitty = new Cat('凱蒂');
Kitty.meow();
Kitty.move();
// Kitty.bark();

```