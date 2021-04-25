---
title: TwoSum
date: 2021-04-14 15:00:57
categories: 
- Leecode
tags:
- Leecode
- Tips
- sloved
---


來源 : https://askie.today/javascript-deep-copy-swallow-copy/


[ O ] 基於剛剛的程式碼，單維陣列可以這樣寫：

numbersCopy.push(4);
console.log(numbers, numbersCopy);
// [1, 2, 3] and [1, 2, 3, 4]
// numbers 沒副作用
[ X ] 假設是多維陣列的情況：

const nestedNumbers = [[1], [2]];
const numbersCopy = [];
let i = -1;
while (++i < nestedNumbers.length) {
  numbersCopy[i] = nestedNumbers[i];
}
numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);
// [[1, 300], [2]]
// [[1, 300], [2]]
// 兩者會同時改變，因為是它們是根據同一個記憶體位址
