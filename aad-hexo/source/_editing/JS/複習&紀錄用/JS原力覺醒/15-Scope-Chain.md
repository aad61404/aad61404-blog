---
title: 鐵人賽精選文章(JS原力覺醒)-15-scope-chain
date: 2020-06-24 17:28
categories: 
- web前端
tags:
- 鐵人賽精選文章
- 15-scope-chain
- JS原力覺醒
---

https://ithelp.ithome.com.tw/articles/10217997

```
const globalText = 'globalText';

function a() {
    const textA = "textA";
    console.log(globalText);
    function c() {
        const textC = "textC";
        console.log(textA);
        b();
    }
    c();
}

function b() {
    console.log(textC);  // ** not defined error
}

a();

```
