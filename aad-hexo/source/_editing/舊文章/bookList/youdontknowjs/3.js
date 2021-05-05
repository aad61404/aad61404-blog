
https://blog.typeart.cc/JavaScript%E4%B8%ADfor%20of%E5%92%8Cfor%20in%E7%9A%84%E5%B7%AE%E5%88%A5/


// ******
//  for in , for of 差別
// *******
因為Python是用for in
而JavaScript上大部份情況用for of較佳，但有的時候又會回來用for in…
主要差別如下：

`
for in是ES5標準；for of是ES6標準。for of修復for in的不足
用object來說的話，for in遍歷的是key；for of遍歷的是value。不過JavaScript中object本身不是可迭代對象，for of會直接報錯(object迭代寫法後面再說明)
for of不能遍歷一般物件，主要是針對數組(即array、arguments等可迭代的對象)使用，會忽略掉不可遍歷的對象
for of可使用的對象有Array、Map、Set、String、TypedArray、arguments
for in會遍歷自定義屬性，甚至原型鏈上的屬性也會遍歷到，反而又不是我們所想要的
`

let arr = ['a','b','c','d',{'e':'e_value','f':'f_value'}];

for(let index in arr){
    console.log(index);
}
// 0,1,2,3,4
//---------------------------------------------------
//若想要用for in 取value，也是可以
for(let index in arr){
    console.log(arr[index]);
}
//a,b,c,d,{'e':'e_value','f':'f_value'}
//---------------------------------------------------
//for in 會遍歷自定義屬性
arr.name='myArray';
for(let index in arr){
    console.log(index);
}
// 0,1,2,3,4,name
//若寫console.log(arr[index])，自定義的name則會印出其內容'myArray'
//---------------------------------------------------
//但用for of，則可以寫的更優雅。且不會遍歷自定義屬性
for(let value of arr){
    console.log(value);
}
//a,b,c,d,{'e':'e_value','f':'f_value'}

`
前文可以看到for of修正了for in的問題，同時解決array中.forEach限制的continue、break
但在JavaScript中，除了陣列，最常使用的就是object了！
直接將for of套用在object中，卻發現直接報錯！因為object本身不是一個可迭代的對象，所以無法遍歷！
這時候就要配合Object.keys()來做了
`
let obj = {
    a:'a_value',
    b:'b_value', 
    c:'c_value'
 }
 
 for(let key of Object.keys(obj)){
     console.log(obj[key]);
 }
 //a_value,b_value,c_value


`
延伸：陣列內含object的寫法
若您的資料結構較複雜，有一堆object組合而成的陣列，想要遍歷陣列裡的物件的value
這又該怎麼寫呢？
就要結合for in跟for of了！
`
let complexArray = [
    {
        name:'小明',
        birth:'1995/07/01'
    },
    {
        name:'小美',
        birth:'1989/11/17'
    },
    {
        name:'小帥',
        birth:'1990/06/25'
    }
]

for(let obj of complexArray){ //先遍歷出所有物件
    for(let key in obj){ //再遍歷每一物件的key，取得value
        console.log(obj[key]);
    }
}
//小明,1995/07/01,小美,1989/11/17,小帥,1990/06/25





// ---------------------------------------------------------


function counter(step = 1) {
    var count = 0;
    return function increaseCount(){
        count = count + step;
        return count;
    };
}

var by1 = counter(100);

by1() // 100
by1() // 200
by1() // 300

// -----------------

function classroom(teacher) {
    return function study() {
        console.log(`${ teacher } wants to study ${ this.topic }`);
    };
};

var assignment = classroom('kyle');

var school = {
    topic: 'nancy',
    assignment : assignment
}

school.assignment()

