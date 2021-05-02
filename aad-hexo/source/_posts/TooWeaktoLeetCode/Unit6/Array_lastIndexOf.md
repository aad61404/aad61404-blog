---
title: Unit6-Array_join
date: 2021-05-01 23:20:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---


// IndexOf() 從第一個開始找遇到的第一個 INDEX
// lastIndexOf() 從後面找回來遇到第一個  index

function lastIndexOf(arr, target) {
	for(let i = arr.length -1; i >=0; i--) {
		// console.log(arr[i]);
		if (arr[i] === target) {
			return i
		}
	}
	return -1
}

console.log(lastIndexOf([2,1,3]))
