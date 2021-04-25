---
title: Unit2-charCode字串大小寫轉換
date: 2021-04-25 16:27:00
categories: 
- TooWeaktoLeetCode
tags:
- TooWeaktoLeetCode
---

chrome terminal 執行
```
let str = 'hELLo';
let ans = '';

// console.log(String.fromCharCode(65, 90,97, 122));

for(let i = 0; i < str.length; i++) {
	let temp = str.charCodeAt(i)
	// console.log(temp);
	if(temp >= 65 && temp <= 90) {
		ans += String.fromCharCode(temp + 32);
	} else {
		if (temp >= 97 && temp <= 122) {
			ans += String.fromCharCode(temp - 32);
		}
		else {
			ands += str[i];
		}
	}
}

console.log('ans', ans);
```