
---
title: TwoSum
date: 2021-04-12 15:00:57
categories: 
- Leecode
tags:
- Leecode
- Tips
- sloved
---

https://leetcode.com/problems/two-sum/submissions/

```
var twoSum = function(nums, target) {
    for(var i=0; i < nums.length; i++) {
        for(var j= i+1 ;j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return  [i,j]
            }
        }
    }
};
```