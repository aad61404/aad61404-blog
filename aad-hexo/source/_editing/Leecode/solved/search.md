---
title: search
date: 2021-04-14 13:24:22
categories: 
- Leecode
tags:
- Leecode
- Tips
- sloved
---

https://leetcode.com/problems/search-in-rotated-sorted-array/

```
var search = function(nums, target) {
    for(var i=0; i < nums.length; i++) {
        if(nums[i] === target) {
           return i;
        }
    }
    return -1;
};
```