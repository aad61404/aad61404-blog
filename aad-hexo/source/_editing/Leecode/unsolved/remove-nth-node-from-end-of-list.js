var arr = [1,2,3,4,5]

var removeNthFromEnd = function*(head, n) {
    console.log('head', head)
    console.log('n:', n)
    for (let index = 0; index < arr.length-1; index++) {
        if (2**n-1 === index) break;
        yield arr[index];
    }
};

// function* countAppleSales () {
//     var saleList = [3, 7, 5];
//     for (var i = 0; i < saleList.length; i++) {
//       yield saleList[i];
//     }
//   }

var b = removeNthFromEnd(arr, 2)
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());