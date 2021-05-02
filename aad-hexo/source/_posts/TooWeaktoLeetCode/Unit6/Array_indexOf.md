---
title: Unit6-Array_IndexOf
date: 2021-05-01 23:15:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---
[目錄連結](https://github.com/Lidemy/ALG101-too-weak-to-leetcode/tree/master/unit6)
[題目連結](https://lidemy.com/courses/793973/lectures/14640703)

```
INPUT 
/*
3,
5,
1,
2,
3,
3,
3,
*/
 OUTPUT

 /*
 1
2
8
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
    let arr =[];
    for(let i = 2; i < lines.length; i++) {
        arr.push(Number(lines[i]));
    }
    console.log(indexOf(arr, target))
}

function indexOf(arr, searchElement) {
    for(let i =0; i < arr.length; i++) {
        if(arr[i] === searchElement) {
            return i
        }
    }
    return -1
}
```
<!-- slove([3,5,1,2,3,3,3]) -->