https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

* 反向寫法
```
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
```

solution 3 精簡
```
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```

solution 4 
```
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length <= num) { return str; }

  return str = str.slice(0, num)+ '...';
  
  // return str.length > num ?  str.slice(0, num)+ '...' : str;
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```