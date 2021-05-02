---
title: Longest_Palindromic_Substring
date: 2021-04-12 16:30:37
categories: 
- Leecode
tags:
- Leecode
- unsloved
---

https://leetcode.com/problems/longest-palindromic-substring/


https://www.youtube.com/watch?v=9M-cgCVt1d0&ab_channel=DevwithJovi

Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:


```
var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    let start=0, maxLength = 1;
    function expandAroundCenter(left,right) {
        while(s[left] === s[right] && left >= 0 && right < s.length) {
            if( (right - left + 1) > maxLength) {
                start = left;
                maxLength = right - left+ 1;
            }
            left -= 1;
            right += 1;
        }
    }
    for(let i=0; i < s.length; i++) {
        expandAroundCenter(i-1, i+1); // odd
        expandAroundCenter(i, i+1); // even
    }

    return s.substring(start, maxLength);
}
```