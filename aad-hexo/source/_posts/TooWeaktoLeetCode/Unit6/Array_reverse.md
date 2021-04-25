---
title: Unit6-Array_lastIndexOf
date: 2021-04-25 17:00:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---

/* 
3
1
2
3
*/

```
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin
});

// cat input.txt | node Array_reverse.js 
var lines = [];

rl.on('line', function (line){
	lines.push(line);
})

rl.on('close', function() {
	slove(lines);
})

function slove(lines) {
	// console.log('lines', lines); // ['3', '1', '2', '3']
	let arr = [];
	for(let i = 1; i < lines.length; i++) {
		arr.push(lines[i]);

	}
	let result = reverse(arr);
	for(let i=0; i < result.length; i++) {
		console.log(result[i]);
	}
}

// LIOJ 1036：Array reverse
function reverse(arr) {
	let result = [];
	for(let i = arr.length -1; i >= 0; i--) {
		result.push(arr[i]);
	}
	// console.log('result', result);
	return result;
}
```