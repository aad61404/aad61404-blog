---
title: removeNthFromEnd
date: 2021-04-14 10:43:11
categories: 
- Leecode
tags:
- Leecode
- Tips
- unsloved
---

https://leetcode.com/problems/remove-nth-node-from-end-of-list/


正解
```

```

錯誤原因 題目指定是linklist
```
var head = [1,2,3,4,5], n = 2
var removeNthFromEnd = function(head, n) {
    if(head.length == 1 && n ==1) return [];
    var temp = [];
    for(var i = head.length -1, j=1; i >=0; i--, j++) {
        if(j !== n) {
            temp.push(head[i]);
        }
    }
    return reverse(temp)
};

function reverse(arr) {
    var tempArr = [];
    for(var i =arr.length -1; i >= 0; i--) {
        tempArr.push(arr[i])
    }
    return tempArr;
}
```

