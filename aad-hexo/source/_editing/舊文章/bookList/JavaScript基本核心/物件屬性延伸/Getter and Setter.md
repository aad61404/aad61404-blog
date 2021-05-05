---
title: Getter and Setter
date: 2019-12-11 18:00:00
categories: 
- JavaScript基本核心
- 物件屬性延伸
tags:
- 物件屬性延伸
---

01.      Getter 使用 取得特定值 (點擊算式的當下取值)
         saveM 會取到的是 運算300之後的值 125
```
       var wallet = {
            total : 100,
            set save(price) {
                this.total = this.total + price /2 ;
            },
            get saveM() {
                return this.total / 2;
            }
        }
        // Getter 使用 取得特定值 (點擊算式的當下取值)
        // saveM 會取到的是 運算300之後的值 125
        console.log(wallet.saveM, wallet)
        
        // Setter 存值方法
        wallet.save = 300;
        console.log(wallet.saveM, wallet)

```

02. 
```
    // part 2
    Object.defineProperty(wallet, 'save', {
        configurable : true,
        enumerable : true,
        set: function (price) {
            this.total = this.total + price /2;
        },
        get: function () {
            return this.total / 2;
        }
    })
```

03. 
```
    // part 3 常用範例 01
    console.log(wallet);
    console.log(Object.getOwnPropertyDescriptor(wallet, 'save'));

    var a = [1,2,3];
    Object.defineProperty(Array.prototype, 'latest', {
        get: function () {
            return this[this.length -1];
        }
    })

    console.log(a.latest);
    var b = [4,5,6];
    console.log(b.latest);
```
