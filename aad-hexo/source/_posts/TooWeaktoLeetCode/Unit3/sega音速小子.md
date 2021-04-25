---
title: Unit3-sega音速小子
date: 2021-04-25 16:41:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---

[題目連結](https://oj.lidemy.com/problem)
搜尋 音速小子


解答
```
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin
});

// var lines = [];
var nums = 0;
rl.on('line', function (line){
	// lines.push(line);
  nums = line
})

rl.on('close', function() {
	slove(nums);
})

function slove(nums) {
  // var lineToString = lines.toString();
  // console.log(lineToString)
  // console.log(typeof(lineToString));
  // var temp = lineToString.split(' ');
  // console.log(temp);
  // let a = Number(temp[0]);
  // let b = Number(temp[1]);
  // console.log(a)
  // console.log(b)
  // console.log('-------------')
  var tempA = Number(nums);
  // console.log(typeof(tempA));
  tempA *= 340;
  console.log(tempA)
}
```