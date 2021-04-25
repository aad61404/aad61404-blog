---
title: maxArea
date: 2021-04-14 13:00:22
categories: 
- Leecode
tags:
- Leecode
- Tips
- sloved
---


https://leetcode.com/problems/container-with-most-water/solution/

var height = [1,8,6,2,5,4,8,3,7]

var maxArea = function(height) {
    var maxArea = 0;
    for(var i=0; i < height.length; i++) {
        for(var j= i+1; j < height.length; j++){
            maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));   
        }
    }
    return maxArea
};

