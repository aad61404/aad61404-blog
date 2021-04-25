---
title: Unit6-Arrar_map
date: 2021-04-25 16:57:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---

map 實作
```
function double(n) {
	return n * 2;
}

let arr = [1, 2, 3];
let newArr = arr.map(double);
// console.log(newArr);

// function map (arr, fn) {}
function map (arr, callback) {
	let result = [];
	for(let i = 0; i < arr.length; i++) {
		// result[i] = arr[i]
		result[i] = callback(arr[i]);
	}
	return result;
}

console.log(map([1,2,3], double))
```