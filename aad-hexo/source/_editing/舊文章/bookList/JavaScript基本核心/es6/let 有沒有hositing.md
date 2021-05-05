---
title: let 有沒有hositing
date: 2019-12-11 18:00:00
categories: 
- JavaScript基本核心
- es6
tags:
- es6
---

1. Hoisting
        
    /*
    * var 
    */
2. var
    ```
    // 創造
    // var Ming
    // 執行
    console.log(Ming) // undefined
    Ming = '小明';
    ```
    /*
    * let  
    */
3. let
    // 測試1
    ```
    console.log(Ming)  // ReferenceError : Cannot access 'Ming' before initialization
    let Ming = '小明';

    // 測試2
    {
        // 創造
        // let Ming ;  // 暫時性死區 TDZ 
        console.log(Ming)
        let Ming = '杰倫'
    }
    ```
    // 1. let 一樣有創造階段
    // 2. 但從創造到實際關告的階段會出現 TDZ 這個區域無法呼叫變數
    // 3. 有創造到執行的概念，但不會預先出現 underfined 而是出現錯誤題是
    // (文件不會表明 這與var 的 hoisting 相同)