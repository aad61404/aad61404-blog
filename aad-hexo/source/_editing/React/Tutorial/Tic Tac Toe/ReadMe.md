---
title: Tic-Tac-Toe
date: 2020-06-18 17:00
categories: 
- web前端
tags:
- React
- Tic-Tac-Toe
- 
---

https://zh-hant.reactjs.org/tutorial/tutorial.html#lifting-state-up

Immutability（不可變性）的重要性
在上一段程式碼的範例中，我們建議你使用 .slice() 運算子去建立一個 squares array 的 copy 並修改它，而不是修改已存在的 array。現在我們來討論什麼是不可變性以及為什麼學習不可變性是很重要的。

一般來說，修改資料有兩種做法。第一種方法是透過改變資料的值來直接修改資料。第二種方法是改變 copy 中的資料，並用這個新的 copy 取代原本的資料。

