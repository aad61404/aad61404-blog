---
title: Unit6-toLowerCase
date: 2021-05-01 23:22:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---
[目錄連結](https://github.com/Lidemy/ALG101-too-weak-to-leetcode/tree/master/unit6)
[題目連結](https://oj.lidemy.com/problem/1042)


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
	console.log(toLowerCase(lines[0]))
}


function toLowerCase(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            let code = str.charCodeAt[i]
            result += String.fromCharCode(code + 32)
        } else {
            result += str[i]
        }
    }
    return result
}

```
