---
title: Unit6-example
date: 2021-05-01 23:16:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---
[目錄連結](https://github.com/Lidemy/ALG101-too-weak-to-leetcode/tree/master/unit6)
[題目連結](https://oj.lidemy.com/problem/1039)


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
	console.log(slice(lines[0], Number(lines[1]), Number(lines[2])))
}

function slice(str, beginIndex, endIndex) {
	let result = ''
	for(let i = beginIndex; i < endIndex; i++) {
		result += str[i]
	}
	return result;
}
```
