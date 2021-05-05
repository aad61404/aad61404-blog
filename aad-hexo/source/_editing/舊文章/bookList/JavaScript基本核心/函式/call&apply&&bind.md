
---
title: call&apply&&bind
date: 2019-12-05 18:00:00
categories: 
- JavaScript基本核心
- 函式
tags:
- 函式
---


```
var myName = "真心話大冒險";

var family = {
    myName: '小名家'
};

function fn (para1 , para2) {
    console.log(this, para1 , para2 )
}

// call , apply , bind 
    fn (1,2)

fn.call(family, 1 ,2)
fn.apply(family, [3,4]);  // apply 後面代入陣列

bind 不會立刻執行 調用才會執行 ，call , apply 會立即執行

var fn2 = fn.bind(family, '小名', '杰倫');
fn2(1);
// 看起來是simple code 但是bind 已經決定 this 調用方式

```




2. 

```
function fn (para1 , para2) {
    console.log(this, typeof this ,para1 , para2 )
}

fn.call(1, '小名', '杰倫');
fn.call('文字', '小名', '杰倫');
fn.call(undefined, '小名', '杰倫');

// call undefined 會被替換成全域
```

3. 嚴格模式

// 簡易呼叫的this 盡可能不要調用， 本質是undefined

(function () {
    'use strict';
    a = '小名';
})()

function callStrict( para1, para2) {
    'use strict';
    console.log(this, typeof this, para1 , para2)
}

callStrict.call(1, '小名', '杰倫');
callStrict.(undefined, '小名', '杰倫');
callStrict('小名', '杰倫');