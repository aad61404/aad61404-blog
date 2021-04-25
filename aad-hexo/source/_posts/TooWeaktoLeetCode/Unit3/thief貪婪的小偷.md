---
title: Unit3-thief貪婪的小偷
date: 2021-04-25 16:46:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---

[題目連結](https://oj.lidemy.com/problem)
搜尋 貪婪的小偷

解答
```
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin
});

// var lines = [];
var textA = '';
rl.on('line', function (line){
	// lines.push(line);
  textA = line
})

rl.on('close', function() {
	slove(textA);
})

function slove(textA) {
  var nums = 0;
  // console.log(typeof(textA))
  // console.log(textA);
  var tempoB =  textA.split(' ');
  var c =  tempoB.map(item => Number(item))
  var d = c.sort(function(a,b) {
    return b - a;
  })
  var e = d.splice(0,3)
  var result = e[0] + e[1] + e[2];
  console.log(toString(result))
  // console.log(e)
}
```