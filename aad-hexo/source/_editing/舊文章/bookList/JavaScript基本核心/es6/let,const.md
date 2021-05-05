---
title: let,const
date: 2019-12-11 18:00:00
categories: 
- JavaScript基本核心
- es6
tags:
- es6
---


1. 
```
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log('取到全域變數' + i + '次');
            // 而不是for 迴圈裡面的 i
        })
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            // let 在這裡不會產生 全域變數(var 才會)
            console.log('取到區域變數' + i + '次');
        })
    }
```

2. 
```
    // part2 
    const person = {
        name : '小明',
        money : 500
    }

    person.name = '杰倫';
    // person = {}
```

3. 


```
    // part3
    var person = {
        name : '小明',
        money : 500
    }

    // const person = {
    //     name : '小明',
    //     money : 500
    // }
    person.name = '杰倫';

    Object.freeze(person);
    person.money = 1000;

    person = {}; //  {}
    // freeze 只有凍結屬性 內容，外部本身仍然會被改變
    //  所以需要const
```

