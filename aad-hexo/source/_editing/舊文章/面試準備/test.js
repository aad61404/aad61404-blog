var array =  [25,15,10];
var array2 =  [ { hey : 111}, {hey : 222}, {hey : 333}];
console.log(array.map(x => x));
console.log(array2.map(x => x.hey));

var foo = {
  taxes: [
      { amount: 25, currencyCode: "USD", decimalPlaces: 0, taxCode: "YRI"},
      { amount: 25, currencyCode: "USD", decimalPlaces: 0, taxCode: "YRI"},
      { amount: 10, currencyCode: "USD", decimalPlaces: 0, taxCode: "YRI"}
  ]
};

var result1 = foo['taxes'].map(bill => bill.amount);
var result2 = foo['taxes'].map(bill => bill.amount).reduce((acc,cur) => cur + acc);
// var result = foo['taxes'].reduce((a,c) => a + c[Object.keys(c)]);
console.log(result1)
console.log(result2)
// console.log(foo);
