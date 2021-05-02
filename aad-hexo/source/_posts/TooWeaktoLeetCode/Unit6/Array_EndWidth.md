---
title: Unit6-_EndWidth
date: 2021-05-01 23:24:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---
[目錄連結](https://github.com/Lidemy/ALG101-too-weak-to-leetcode/tree/master/unit6)
[題目連結](https://oj.lidemy.com/problem/1043)


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
	console.log(endsWith(lines[0], lines[1]) ? true : false)
}

function endsWith(str, searchString) {
    if(searchString.length > str.length) {
        return false;
    }

    let strIndex = str.length -1;
    let searchIndex = searchString.length - 1;

    while(searchIndex >= 0) {
        if(str[strIndex] !== searchString[searchIndex]) {
            return false;
        }

        strIndex--;
        searchIndex--;
    }
    return true;
}



```
