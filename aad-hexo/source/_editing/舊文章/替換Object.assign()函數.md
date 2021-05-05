---
title: 替換或模擬Object.assign()函數
date: 2019-10-30 18:06:57
categories: 
- web前端
tags:
- jQuery
- 表格
- 表单验证
---

2019/10/30 
剛好有學生問一個很棒的問題，分享一下：
在MDN的Spread syntax中：
為什麼不能替換或模擬Object.assign()函數?
(圖1)
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax


mdn 上解法

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

var mergedObj = merge ( obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge ( {}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }




因為：因為rest parameter取得的是陣列類型，sparad operator展開陣列的時候會包含陣列索引數

因此我重新改寫了一下，利用reduce就可以解決這個問題囉！
偷米騎八哥  Taiwan Front-end 
解法
```
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
var merge = ( ...params ) => ( console.log(params));
merge(obj1, obj2);

console.log({ ...[{foo: 'bar',x: 42},{foo: 'baz', y:13}] });
console.log({ ...{foo: 'bar', x:42}, ...{foo: 'baz', y:13} });

var merge2 = (...objects) => objects.reduce((prev, next)=> ({ ...prev, ...next}), {})
merge({}, obj1, obj2);
```
