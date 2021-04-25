---
title: valid-parentheses
date: 2021-04-14 12:41:11
categories: 
- Leecode
tags:
- Leecode
- Tips
- unsloved
---

https://segmentfault.com/a/1190000018851060

https://leetcode.com/problems/valid-parentheses/

延伸觀念 來源 : https://askie.today/javascript-deep-copy-swallow-copy/

const isValid = function(str) {
    const arr = [];
    const obj = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    }
    for(var i =0; i < str.length; i++) {
        var item = str[i];
        if( str[i] === '{' || str[i] === '(' || str[i] === '[') {
            arr.push(str[i])
        } else {
            if(arr.pop() !== obj[item]) {
                return false;
            }
        }
    }
    return arr.length === 0;
}

```
const isValid = function(str) {
    const arr = [];
    const map = {
        "}": "{",
        ")": "(",
        "]": "[",
    }    
    for(let item of str){
       if(item === '{' || item === '(' || item === '['){
          arr.push(item);
       }else{
           if(arr.pop() !== map[item] ){
              return false;
           }
       }
    }
    return arr.length === 0;
};
```