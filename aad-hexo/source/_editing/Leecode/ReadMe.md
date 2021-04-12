---
title: Leecode 解題技巧
date: 2020-06-18 09:00:57
categories: 
- Leecode
tags:
- Leecode
- Tips
---


https://leetcode.com/list/xoqag3yj/

# Leecode 解題技巧

Longest Substring Without Repeating Characters
- 看得懂題目 ， 不看example 情況下只讀文字 了解題目要考什麼
- 要把題目看清楚 
    - 決定return 什麼type => 決定你要用什麼storage (只存需要的東西 不要複雜化)
- 選擇最適合的Data structure 來儲存
    - 能用set 就不用array
- edge case
invalid , null , empty
- singele later , 重覆reapeat

abcabbcbb ->  3
1. the max length for the character stops at next repeating character
2. any character could be the begining of the longest substring

array of set
abcabcbb

```
index: 1
character : a
maxLength: 1
resultsArray: Set<Character>
[
    [a]
]


index: 2
character: b
maxLength: 2
resultsArray: Set<Character>
[
    [a,b],
    [b]
]

index: 3
character: 3
maxLength: 3
resultsArray: Set<Character>
[
    [a,b,c],
    [b,c]
]

index: 4
character: a
maxLength: 3
resultsArray: Set<Character>
[
    [a,b,c], <- 這行重複需刪除
    [b,c],
    [c,a]
]
```

做到一半待續 ...
https://youtu.be/rajRxGEjJOA?t=457


來源: 
https://www.youtube.com/watch?v=rajRxGEjJOA 
