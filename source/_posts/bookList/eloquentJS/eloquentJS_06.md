---
title: eloquentJS_06
date: 2019-11-27 17:02:36
type: "eloquentJS"
tags:	""
categories:	"eloquentJS"
description: "eloquentJS_06"
---

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
  }
}

let killerRabbit = new Rabbit("Killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak("Hi there")
blackRabbit.speak("Hello")

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord())

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth)
console.log(blackRabbit.teeth)
console.log(Rabbit.prototype.teeth);

console.log("toString" in Object.create(null));

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`)
console.log("Is Jack's age known?", ages.has("Jack"));
console.log(ages.has("toString"));

console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty("toString"));

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
}

console.log(String(blackRabbit))

let sym = Symbol("name");
console.log(sym == Symbol("name"));

Rabbit.prototype[sym] = 55
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
}

console.log([1,2].toString());
// console.log([1,2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  
  get(x, y) {
    return this.content[y * this.width + x];
  }
  
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  
  next() {
    if (this.y == this.matrix.height) return { done: true }
    
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };
    
    this.x++
    if(this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    
    return { value, done: false }
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);

for(let {x, y, value} of matrix) {
  console.log(x, y, value);
}


let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
}

console.log(varyingSize.size);
console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  
  static fromFahrenheit(value) {
    return new Temperature((value = 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);


class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }
  
  set(x, y, value) {
    super.set(x, y, value);
    
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix1 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix1.get(2, 3));





// // Exercise 1: A Vector Type:

// class Vec {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
  
//   plus(otherVector) {
//    return {
//      x: this.x + otherVector.x,
//      y: this.y + otherVector.y
//    } 
//   }
  
//   minus(otherVector) {
//     return {
//      x: this.x - otherVector.x,
//      y: this.y - otherVector.y
//    } 
//   }
  
//   get length() {
//     return Math.sqrt(this.x * this.x + this.y * this.y)
//   }
// }

// console.log(new Vec(1,2).plus(new Vec(2,3)));
// console.log(new Vec(1,2).minus(new Vec(2,3)));
// console.log(new Vec(3,4).length);


// // Exercise 2: A Groups

// class Group {
  
//   constructor() {
//     this.members = [];
//   }
  
  
//   add(value) {
//     if (!this.has(value)) { 
//       this.members.push(value)
//     }
//   }
  
//   delete(value) {
//     if (this.has(value)) { 
//       this.members = this.members.filter( member => member != value )
//     }
//   }
  
//   has(value) {
//     return this.members.includes(value)
//   }
  
//   static from(collection) {
//     let group = new Group;
    
//     for (let value of collection) {
//       group.add(value);
//     }
//     return group;
//   }
  
//   [Symbol.iterator]() {
//     return new GroupIterator(this);
//   }
// }

// let group = Group.from([10, 20])
// console.log(group.has(10))
// console.log(group.has(30));
// console.log(group.add(10));
// console.log(group.delete(10));
// console.log(group.has(10));

// // Exercise 3: Iterable Groups


// class GroupIterator {
  
//   constructor(group) {
//     this.group = group;
//     this.index = 0;
//   }
  
//   next() {
//     if (this.index >= this.group.members.length) {
//       return { done: true }
//     } else {
//       let result = {value: this.group.members[this.index], done: false }
//       this.index++;
//       return result
//     }
//   }
// }

// for (let value of Group.from(["a", "b", "c"])) {
//   console.log(value);
// }

// // Exercise 4: Borrowing a Method

// let map = { one: true, two: true, hasOwnProperty: true }

// console.log(Object.prototype.hasOwnProperty.call(map, "one") )