---
title: Unit3-soulMate靈魂伴侶
date: 2021-04-25 16:42:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---

[題目連結](https://oj.lidemy.com/problem)
搜尋 靈魂伴侶

解答
```
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin
});

var lines = [];

rl.on('line', function (line){
	lines.push(line);
})

rl.on('close', function() {
	slove(lines);
})

function slove(lines) {
  console.log(lines)
  console.log(typeof(lines))
  console.log(lines.split(' '));
  
  console.log('-----------')

  for(let i=0; i<lines.length; i++) {

  	let temp = lines[i].split(' ')
  	let a = Number(temp[0])
  	let b = Number(temp[1])

  	if (a === b) {
      console.log(true)
  	} else {
  		console.log(false)
  	}
  }
}
```