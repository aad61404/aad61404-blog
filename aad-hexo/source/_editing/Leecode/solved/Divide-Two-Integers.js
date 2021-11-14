var divide = function(dividend, divisor) {
    // console.log('dividend:', dividend)
    // console.log('divisor:', divisor)
 
    const Max_Value = Math.pow(2, 31) -1;
    const Min_Value = Math.pow(-2, 31);
    var newNum = dividend / divisor;
    if(newNum > Max_Value) {
        return Max_Value;
    }

     if(newNum < Min_Value) {
        return Min_Value;
    }


    if(newNum > 0) {
        newNum = Math.floor(newNum)
    } else {
        newNum = Math.ceil(newNum)
    }
    return newNum
};

