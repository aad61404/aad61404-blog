---
title: Unit6-Array_fill
date: 2021-05-01 23:16:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---
[目錄連結](https://github.com/Lidemy/ALG101-too-weak-to-leetcode/tree/master/unit6)
[題目連結](https://oj.lidemy.com/problem/1039)

```
INPUT 
/*
10
3
1
2
3
*/
 OUTPUT

 /*
10
10
10
 */
```

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
	let target = Number(lines[0]);
	let arr = [];
	for( let i =2; i < lines.length; i++) {
		arr.push(Number(lines[i]));
	}
	let newArr = fill(arr, target);
	for(let i =0; i < newArr.length; i++) {
		console.log(newArr.length);
	}
}

function fill(arr, value) {
	let result = [];
	for(var i =0; i < arr.length; i++) {
		result[i] = value;
	}
	return result;
}
```
