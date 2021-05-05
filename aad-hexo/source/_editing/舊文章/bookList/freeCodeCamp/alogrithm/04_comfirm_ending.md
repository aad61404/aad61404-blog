Basic Algorithm Scripting: Confirm the EndingPassed

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

3種解 index, 正規表達示 , slice 

solution 1
```
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str = str.split('').reverse();
  target = target.split('').reverse();
  for(var i=0; i<target.length; i++) {
    if(target[i] !== str[i]) return false;
  }
  // console.log(str);
  return true;
}

confirmEnding("Bastian", "n");
```

solution 2 
```
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));
```


solution 3 
```
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
```