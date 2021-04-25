---
title: Unit6-Array_filter
date: 2021-04-25 16:58:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---


/* 
3
5
1
3
3
2
8
*/

```
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin
});

// cat input.txt | node Array_filter.js 
var lines = [];

rl.on('line', function (line){
	lines.push(line);
})

rl.on('close', function() {
	slove(lines);
})

function slove(lines) {
	// console.log('lines', lines); // ['3', '1', '2', '3']
	let target = Number(lines[0]);
	let arr = [];
	for(let i = 2; i < lines.length; i++) {
		arr.push(Number(lines[i]));
	}
	let newArr = filter(arr, function(element) {
		return element !== target;
	}) 

	for(let i=0; i < newArr.length; i++) {
		console.log(newArr[i]);
	}
}

// LIOJ 1037：Array filter
function filter(arr, callback) {
	let result = [];
	for(let i =0; i < arr.length; i++) {
		if(callback(arr[i])) {
			result.push(arr[i])
		}
	}
	return result;
}
```