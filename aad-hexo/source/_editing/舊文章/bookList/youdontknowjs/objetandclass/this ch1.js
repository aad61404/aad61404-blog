// **************
// function , this 的問題 
// 解決方案 
// 1. foo.count ++
// 2. var data = { count: 0}  data.count ++
// 3. 使用foo.call( foo , i)
// **************

// var a = 6
function foo() {
	var a = 2;
	this.bar();
}

function bar() {
    var a = 4;
    let c = this;
	console.log( this.a );
    console.log(c.a);
}

foo(); // undfined  // undfined


function bike() {
    console.log(this.name);
  }
  
  var name = "Ninja";
  var obj1 = { name: "Pulsar", bike: bike };
  var obj2 = { name: "Gixxer", bike: bike };
  
  bike();           // "Ninja"
  obj1.bike();      // "Pulsar"
  obj2.bike();      // "Gixxer"

// this 造成的問題 !
//   --------------------------------

function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 0 -- WTF?

// *********
// solution1 解決方案1 使用 foo.count ++;
// *********

function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	foo.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 4

// *********
// solution2 解決方案2 create a data = { count: 0}
// count ++
// *********
function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	data.count++;
}

var data = {
	count: 0
};

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( data.count ); // 4

// ---------------------------
// *********
// solution3 解決方案3 真要使用 this 請用call 綁定
// call
// *********
function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	foo.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 4



var me = {
	name: "Kyle"
};

var you = {
	name: "Reader"
};

function identify(context) {
	return context.name.toUpperCase();
}

function speak(context) {
	var greeting = "Hello, I'm " + identify( context );
	console.log( greeting );
}

identify( you ); // READER
speak( me ); // Hello, I'm KYLE


// -------------------------------
function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
}

var me = {
	name: "Kyle"
};

var you = {
	name: "Reader"
};

identify.call( me ); // KYLE
identify.call( you ); // READER

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER