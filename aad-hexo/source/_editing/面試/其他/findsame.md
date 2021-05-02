https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

var objectsEqual = (o1, o2) => 
    typeof o1 === 'object' && Object.keys(o1).length > 0 
        ? Object.keys(o1).length === Object.keys(o2).length 
            && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
        : o1 === o2;


1. Set
[...new Set(array)]
```
const array = ['z', 1, 2, 'z', 'z', 3];
// Step 1
const uniqueSet = new Set(array);
// Set { 'z', 1, 2, 3}

// Step 2
const backToArray = [...uniqueSet];
// ['z', 1, 2, 3]

// or 
Array.from(new Set(array))
//  ['z', 1, 2, 3]
```


2. filter
arr.filter((value, index) => { return arr.indexOf(value) === index;  })
```
const array = ['z', 1, 2, 'z', 'z', 3];
array.indexOf('z'); // 0
array.indexOf(1); // 1
array.indexOf(2); // 2
array.indexOf(3); // 5

array.filter((item , index) => {
    console.log(
        // a.Item
        item,
        // b.Index
        index,
        // c. indexOf
        array.indexOf(item),
        // d. Condition
        array.indexOf(item) === index,
    );

    return array.indexOf(item) === index
})

// to ONE 

array.filter((item, index) => array.indexOf(item) !== index)

// ['z', 'z']
```

3. using Reduce
```
const array = ['z', 1, 2, 'z', 'z', 3];

array.reduce((unique, item) => {
    console.log(
        // a.Item
        item,
        // b. Final Array (Accumulator)
        unique,
        // c. Condition
        unique.includes(item),
        // d. Reducer Function Result
        unique.includes(item) ? unique : [...unique, item],
    );

    return  unique.includes(item) ? unique : [...unique, item]
}, []);
```