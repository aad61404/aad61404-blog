---
title: this指向
date: 2019-12-05 18:00:00
categories: 
- JavaScript基本核心
- 函式
tags:
- 函式
---


**
- this 與函式如何宣告 `沒有關連性`，僅與呼叫方法有關
- 物件的方法調用時，僅需要關注式在哪一個物件底下呼叫

1. 常見 
Ojbect.fn()      this 指向Object

2. 變數底下 
**  請問family.callName() ???

```
var myName = "真心話大冒險";

function callName() {
    console.log(this , this.myName);
}
// callName();

var family = {
    myName: '小名家',
    callName: callName
}
family.callName(); //  ???
```

3. 三層

```
function callName() {
    console.log(this , this.myName);
}

var family = {
    myName: '小名家',
    callName: callName,
    Ming: {
        myName: '小名',
        callName: callName
    }
}
family.callName();
family.Ming.callName();
```

4. 
```
var myName = "真心話大冒險";

function callName() {
    console.log(this , this.myName);
}
var family = { 
    myName : '小名家',
    callName: function() {
        console.log(this.myName);
    }
}
var callName2 = family.callName;
callName2();


```


```
var name = '全域';
(function () {
	var  name = '區域';
	console.log(this.name);
	console.log(name);
	setTimeout(function() {
		console.log(this.name)
    },500)
})();
```