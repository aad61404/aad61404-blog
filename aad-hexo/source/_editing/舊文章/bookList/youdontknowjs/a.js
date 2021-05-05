// ****************
// value && reference
// ****************


let myName = "Kyle";

let yourName = myName;

myName = "Frank";

console.log(myName);
// Frank

console.log(yourName);

var myAddress = {
    street: "123 JS Blvd",
    city: "Austin",
    state: "TX"
};

var yourAddress = myAddress;

// I've got to move to a new house!
myAddress.street = "456 TS Ave";

console.log(yourAddress.street);

// ************
// async await
// ************


f = async x => {
    var y = await doSomethingAsync(x);
    return y - 2;
}
async x => {
    var y = await doSomethingAsync(x);
    return y - 2;
}
function doSomethingAsync(x) {
    x = x *2;
    return x;
}
f(3)
// Promise {<resolved>: 4}





// ****************
// protoype
// ****************

var homework = {
    study() {
        console.log(`Please study ${ this.topic }`);
    }
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();
// Please study JS

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study();
// Please study Math


// Two different ways to define functions
class SomethingKindaGreat {
    // class methods
    coolMethod() { .. }   // no commas!
    boringMethod() { .. }
}

var EntirelyDifferent = {
    // object methods
    coolMethod() { .. },   // commas!
    boringMethod() { .. },

    // (anonymous) function expression property
    oldSchool: function() { .. }
};





// *********
// Class
// *********
var Classroom = {
    welcome() {
        console.log("Welcome, students!");
    }
};

var mathClass = Object.create(Classroom);

mathClass.welcome();
// Welcome, students!

class Classroom {
    constructor() {
        // ..
    }

    welcome() {
        console.log("Welcome, students!");
    }
}

var mathClass = new Classroom();

mathClass.welcome();
// Welcome, students!


// ----------------------------------
// 補充
// ---------------------------------
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

var hero1 = new Hero('Varg', 1);


class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}
var hero1 = new Hero('yo', 2);
hero1
// Hero {name: "yo", level: 2}
hero1.greet()
// "yo says hello."
