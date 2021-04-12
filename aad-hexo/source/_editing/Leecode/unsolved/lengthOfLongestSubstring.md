
---
title: lengthOfLongestSubstring
date: 2021-04-12 15:30:10
categories: 
- Leecode
tags:
- Leecode
- Tips
- unsloved
---


https://leetcode.com/problems/longest-substring-without-repeating-characters/

https://ithelp.ithome.com.tw/articles/10198337

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

'bbbbbbbb'
"abcabcbb"
"pwwkew"
```
    var arr = [];
    var maxLen = 0;
   
    var s = "abcabcbb"
 
    //首先跑迴圈，把每個字元都看過
    for(let i=0; i<s.length; i++){
    
        if(arr.indexOf(s[i]) !== -1){
            arr = arr.slice(arr.indexOf(s[i])+1);
        };
        
        arr.push(s[i]);
      
        if(maxLen < arr.length){
            maxLen = arr.length;
        }
        console.log(arr, maxLen);
    };
```


```
var lengthOfLongestSubstring = function(s) {
    //宣告一個陣列，用來裝不重複的字元。
    let arr = [];
    //宣告要回傳的變數，用來裝不重複的字元的字串長度
    let maxLen = 0;
    'bbbbbb'
    //首先跑迴圈，把每個字元都看過
    for(let i=0; i<s.length; i++){
    
        //先比較現在這個字母有沒有在陣列中
        if(arr.indexOf(s[i]) !== -1){
            /*如果有的話，因為重複了，所以把從該位置之前的字元都從陣列中拿掉
            陣列中保持著在該字串中連續，且不重複的字元*/
            arr = arr.slice(arr.indexOf(s[i])+1);
        };
        
        //經過判斷後把目前這個字元加進陣列中
        arr.push(s[i]);
        
        //如果目前陣列的長度，大於目前要回傳的最大長度，就把要回傳的最大長度更新
        if(maxLen < arr.length){
            maxLen = arr.length;
        }
    };
    
    //最後回傳
    return maxLen;
};
```