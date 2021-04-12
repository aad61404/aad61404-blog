---
title: 三個反轉字串方法
date: 2021-04-12 17:13:22
categories: 
- Leecode
tags:
- Leecode
- Tips
- unsloved
---


https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

three way reverse String

* 須知道以下用法
String.substr()
String.prototype.charAt()
String.prototype.charCodeAt()
str.split("").reverse().join("");

substr
```
const str = 'Mozilla';

console.log(str.substr(1, 2));
console.log(str.substr(2));
console.log(str)

> "oz"
> "zilla"
> "Mozilla"
```

chartAt , charCodeAt
```
const sentence = 'The quick';

console.log(`${sentence.charAt(4)}`);
console.log(`${sentence.charCodeAt(4)}`);

>"q"
>"113"

---------------------------------------------------

1. 反向for 迴圈
```

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    return newString; // "olleh"
}
 
reverseString('hello');
```

2. simple Algorithm
```
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
```

3. 內建函式

```
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
```