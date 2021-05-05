* obj 在兩層以上 不要用.  請使用 [] 
for  in 只有一層

obj.hasOwnProperty('Alan'); // true , false
Object.keys(obj) //  [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

* 因為
var a ={
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(usersObj) {
  // change code below this line
  var count =0;
  for(let user in usersObj) {
    console.log(user);
    if(userObj[user].online == true) count++;
    // userObj.user.online  輸出 undefined;
    return user;
  }
  // console.log(count);
  // return count;
  // change code above this line
}


// Object delete

```
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// change code above this line

console.log(foods);

```

* check object has value
Basic Data Structures: Check if an Object has a PropertyPassed
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property
```
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  if (
    // obj.hasOwnProperty("Alan") &&
    // obj.hasOwnProperty("Jeff") &&
    // obj.hasOwnProperty("Sarah") &&
    // obj.hasOwnProperty("Ryan")
    'Alan' in obj &&
    'Jeff' in obj &&
    'Sarah' in obj &&
    'Ryan' in obj 
  ) {
    return true;
  } else
  return false;
  // change code above this line
}

console.log(isEveryoneHere(users));

```


Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for...in-statement
```
function countOnline(usersObj) {
  // change code below this line
  var count =0;
  for(let user in usersObj) {
    console.log(user);
    if(userObj[user].online == true) count++;
    // userObj.user.online  輸出 undefined;
    return user;
  }
  // console.log(count);
  // return count;
  // change code above this line
}

```



last one 
Basic Data Structures: Modify an Array Stored in an Object
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line
  userObj['data']['friends'].push(friend);
  return (userObj['data']['friends']);
  // console.log(userObj['data']['friends']);
  
  
  // change code above this line
}

console.log(addFriend(user, 'Pete'));
