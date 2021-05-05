https://repl.it/@KevinMulhern/eloquentjavascriptchapter5-1



repeat
```
function repeat(n , action) {
	for(let i=0; i<n; i++){
		action(i);
    }
}

repeat(3, console.log);

```


```
let labels = [];
repeat(5, i =>{ 
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);


// ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

```


Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.
```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
```



```
function repeat(n , action) {
	for(let i=0; i<n; i++){
		action(i);
    }
}

repeat(3, console.log);

function unless(test, then) {
 if(!test) then();
}

repeat(3, n =>{
	unless(n % 2 == 1, () => {
		console.log(n , "is even");
    });
});

```

https://repl.it/@KevinMulhern/eloquentjavascriptchapter5-1

filter

```
var SCRIPTS = [
	{
		name: 'Adlam',
		ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
		direction: 'rtl',
		year: 1987,
		living: true,
		link: 'https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet',
	},
	{
		name: 'Caucasian Albanian',
		ranges: [[66864, 66916], [66927, 66928]],
		direction: 'rtl',
		year: 420,
		living: false,
		link: 'https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet',
	},
	{
		name: 'Ahom',
		ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
		direction: 'ltr',
		year: 1250,
		living: false,
		link: 'https://en.wikipedia.org/wiki/Ahom_alphabet',
	},
];



function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(filter(SCRIPTS, script => script.living));

```


map 
```
function map(array, transform){
	let mapped = [];
	for(let element of array){
		mapped.push(transform(element));
    }
	return mapped;
}

console.log(map(SCRIPTS, s => s.name));

```

reduce 
```
function reduce(array, combine, start) {
	let current = start;
	for(let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log(reduce([1,2,3,4], (a,b) => a+b, 0));

```


characterCount(script)

```
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}

```



```
var SCRIPTS = [
	{
		name: 'Adlam',
		ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
		direction: 'rtl',
		year: 1987,
		living: true,
		link: 'https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet',
	},
	{
		name: 'Caucasian Albanian',
		ranges: [[66864, 66916], [66927, 66928]],
		direction: 'rtl',
		year: 420,
		living: false,
		link: 'https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet',
	},
	{
		name: 'Ahom',
		ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
		direction: 'ltr',
		year: 1250,
		living: false,
		link: 'https://en.wikipedia.org/wiki/Ahom_alphabet',
	},
];


var longest = (key, array) => Math.max(...array.map(it => it[key].length));

console.log(longest("name", /*in*/ longestScri));
```