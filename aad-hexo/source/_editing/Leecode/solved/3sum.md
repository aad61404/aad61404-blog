---
title: 3sum
date: 2021-04-14 18:00:22
categories: 
- Leecode
tags:
- Leecode
- sloved
---

```
var nums = [-1,0,1,2,-1,-4]

var threeSum = function(nums) {

    nums = nums.sort(function(a,b) {
        return a - b;
    })

    if(nums.length < 3) {
        return []
    }
    
    var yo = [];
    var x,y,z;
    var len =nums.length;
    
    
    for(var i=0; i < len; i++) {
        if(i >0 && nums[i] === nums[i-1]) continue;
        for(var j = i + 1; j < len; j++) {
            if(j > i+1 && nums[j] === nums[j-1])  continue

            for(var k=j+1; k< len; k++) {
                if(k > j+1 && nums[k] === nums[k-1]) continue
            
                if(nums[i] + nums[j] + nums[k] === 0) {
                    yo.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    console.log(yo)
};
```