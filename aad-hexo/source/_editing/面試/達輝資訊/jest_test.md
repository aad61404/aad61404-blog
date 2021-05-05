---
title: 面試
date: 2021-04-28 16:04:00
categories: 
- 面試
tags:
- 面試
---

```
var inputValue = {
    hired: {
      be: {
        to: {
          deserve: "I",
        },
      },
    },
  };
  
  var outputValue = {
    I: {
      deserve: {
        to: {
          be: "hired",
        },
      },
    },
  };
  
  var tempArr = [];
  function collectItem(obj) {
      for(var item in obj) {
          tempArr.push(item);
          
          if(typeof obj[item] === 'object') {
              obj[item] = collectItem(obj[item]);
          } else {
              tempArr.push(obj[item]);
          }
      }
  }
  
  collectItem(inputValue);
  tempArr = tempArr.reverse()
  // console.log('tempArr:', tempArr)
  
  var res = {};
  var value = tempArr.pop();
  
  
  for(var i=tempArr.length-1; i >= 0;  i--){
    var item = tempArr[i]; 
    var temp = {};
  
    if(i == tempArr.length -1) {
      temp[item] = value;
    } else {
      temp[item] = {};
    }
  
    if(i != tempArr.length){
      Object.keys(res).forEach(r => {
        temp[item][r] = res[r] ;
      })
    }
    res = temp ;
  }
  
  console.log(res) ;
```