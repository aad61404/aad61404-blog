https://www.codingame.com/ide/puzzle/apple-tree


There are N apples on the tree. Every apple is a sphere with position (x, y, z) and radius r.
Then the i-th apple begins to fall straight down and can collide with others. When static apple gets hit by the falling one it begins to fall too, and the falling apple continues to fall straight down.
Your task is to determine how many apples will remain on the tree.

NOTE
"Down" direction is vector (0, 0, -1), i.e. apple with position (0,0,10) is higher than (0,0,5)

我的解答 66%
```
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const N = parseInt(inputs[0]);
 const index = parseInt(inputs[1]);
 var apples = [];
 
 for (let i = 0; i < N; i++) {
     var inputs = readline().split(' ');
     const x = parseInt(inputs[0]);
     const y = parseInt(inputs[1]);
     const z = parseInt(inputs[2]);
     const r = parseInt(inputs[3]);
 
     apples.push({x,y,z,r}) 
 }
 

 var storeIndex = apples[index];

 var newApple = [...apples];
 var fallApple = [];
 var countApple = [];
 newApple.sort((a,b) => { return b.z - a.z });

 var fountIndex = newApple.indexOf(storeIndex);

 var len = newApple.length;
 var nums = N; 
 var fallNums = 0;


 function countApp(index) {
      for(let i=  index; i <= len; i++) {
          fall(newApple[index], newApple[i], i);
      }
 }
countApp(fountIndex)


function recursive(fallA) {
    var FallAIndex = newApple.findIndex(function (app) {
        return app.x === fallA.x&&
                app.y === fallA.y&&
                app.z === fallA.z&&
                app.r === fallA.r;
    });

    for(var k = FallAIndex; k < len; k++) {

         fall(newApple[FallAIndex], newApple[k], k);
    }

}



for(var w =1; w < len; w++) {
    let ee = fallApple.length;
    if(fallApple.length > 1) {
        var fallAppleZero = fallApple[w];
        if(!fallAppleZero ) break;
        recursive(fallAppleZero);
        if(w == fallApple.length) break ;  
    }
    
}


 function fall(a, b, i) {
        if(i >= len) return null;
        var aTob = (Math.sqrt( Math.pow((b.x - a.x), 2), Math.pow((b.y - a.y), 2)) );
         if((a.r + b.r) > aTob) {
             if(a.z > b.z) {
                var findA = fallApple.findIndex(function (app) {
                    return app.x === a.x&&
                           app.y === a.y&&
                           app.z === a.z&&
                           app.r === a.r;
                });
                var findB = fallApple.findIndex(function (app) {
                    return app.x === b.x&&
                           app.y === b.y&&
                           app.z === b.z&&
                           app.r === b.r;
                });
                if(findA == -1) fallApple.push(a);
                if(findB == -1) fallApple.push(b);
             }
         }
 }


 if(fallApple == 0) {
     console.log(1);
 } else {
     console.log(N - fallApple.length);
 }
 
 ```


[線上別人解答100%](https://www.xarg.org/puzzle/codingame/apple-tree/)
```
var inputs = readline().split(' ');
var N = +inputs[0];
var I = +inputs[1];

var apples = [];

var M = new Set; // maybe
var W = new Set; // working set

for (var i = 0; i < N; i++) {
  var inputs = readline().split(' ').map(Number);

  apples.push({
    x: inputs[0],
    y: inputs[1],
    z: inputs[2],
    r: inputs[3]
  });

  if (I !== i) M.add(i);
  else         W.add(i);
}

W.forEach(w => {
  M.forEach(m => {
    if (hits(apples[w], apples[m])) {
      W.add(m);
      M.delete(m);
    }
  });
});

print(M.size);

function hits(a, b) {

  var dx = b.x - a.x;
  var dy = b.y - a.y;
  var pr = b.r + a.r;
    
  // touch horizontally?
  if ((dx * dx + dy * dy) > (pr * pr)) {
    return false;
  }
  return b.z < a.z;
}

```