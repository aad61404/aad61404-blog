---
title: this練習
date: 2019-12-05 18:00:00
categories: 
- JavaScript基本核心
- 函式
tags:
- 函式
---


錯了
```
var name = '小名';
var obj = {
    x: function() {
        name = '小王';
        console.log(this.name);
    },
    y: '2',
}
obj.x()
```

延伸題
```
var name = '小名';
var obj = {
    x: {
        name: '小虎',
        myname: function () {
            console.log(this.name);
            setTimeout(function() {
                console.log(this.name)
            }, 500)
        }
    },
    y: '2',
    name: '小王',
}
var a = obj.x.myname();

```



錯了
```
function callName(name) {
    console.log(this.name, name);
}

var name = '全域阿婆';
var auntie = {
    name : '漂亮阿姨',
}
callName(undefined, '小名');
callName.call(auntie, '小名');
```


錯了
```
var name = '全域';
var auntie = {
    name : '漂亮阿姨',
	callName: function() {
	    console.log(this.name);
    }
};
// auntie.callName();
(function() {
	var a = auntie.callName;
	a();
})();
```

錯了
```
var name = '全域';
(function () {
	var  name = '區域';
	setTimeout(function() {
		console.log(this.name)
    },500)
})();
```