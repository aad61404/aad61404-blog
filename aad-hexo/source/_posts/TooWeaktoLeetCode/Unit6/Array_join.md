---
title: Unit6-join
date: 2021-05-01 23:18:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---
[目錄連結](https://github.com/Lidemy/ALG101-too-weak-to-leetcode/tree/master/unit6)
[題目連結](https://oj.lidemy.com/problem/1040)


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
	let str = lines[0]
	let arr =[]
	for(let i =2; i < lines.length; i++) {
		arr.push(lines[i])
	}
	console.log(join(arr, str))
}

// [1, 2, 3] !
// 1!2!3!
 function join(arr, separator) {
	let result = '';
	for (let i =0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			result += arr[i]
		} else {
			result += arr[i] + separator
		}
	}
	return result
 }
<!-- function join(arr, separator) {
	let result = '';
	for (let i =0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			result += arr[i]
		} else {
			result += arr[i] + separator
		}
	}
	return result
} -->

```
