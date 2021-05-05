var list = [
  
    {
      "name": "臺北市政府",
      "count": 1247,
      "url": "/datasets/search?qs=dtid%3A22003%2B&order=pubdate",
      "itemPrice": 152.73,
      "CurrencyCode": "USD",
      "OrderStatus":　"Shipped"
    },
    {
      "name": "新北市政府",
      "count": 2950,
      "url": "/datasets/search?qs=dtid%3A22026%2B&order=pubdate",
      "itemPrice": 152.73,
      "CurrencyCode": "CHN",
      "OrderStatus":　"Pending"

    },
    {
      "name": "基隆市政府",
      "count": 651,
      "url": "/datasets/search?qs=dtid%3A22001%2B&order=pubdate",
      "itemPrice": 152.73,
      "CurrencyCode": "ROC",
      "OrderStatus":　"Return"
    },
    {
      "name": "桃園市政府",
      "count": 1338,
      "url": "/datasets/search?qs=dtid%3A22030%2B&order=pubdate",
      "itemPrice": 152.73,
      "CurrencyCode": "AWS",
      "OrderStatus":　"Return"
    }
  
]

var c = list.reduce((acc, curr) => {
  return acc.itemPrice = acc.itemPrice+  curr.itemPrice;
})
console.log('c:', c)
// var b = list.filter(d => d.OrderStatus == 'Return');
// console.log('list:', b)