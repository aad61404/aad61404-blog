---
title: combinationSum
date: 2021-04-14 13:56:11
categories: 
- Leecode
tags:
- Leecode
- Tips
- unsloved
---



https://leetcode.com/problems/combination-sum/
延伸:Day9 -- Brute Force - DFS & BFS
https://ithelp.ithome.com.tw/articles/10237752

解
```

```


未解完
```
var combinationSum = function(candidates, target) {
    var result = [];
    var canUse = [];
    
    // copy candidates
    for(var i=0; i< candidates.length; i++) {
        canUse.push(candidates[i]);
    }
    var len = candidates.length
    var nums = 0;
    for(var i=0; i < len; i++) {
        var item = candidates[i];
        nums += item;
        if(item === target) {
        
        }
    }
};
```