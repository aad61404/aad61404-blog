https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter



var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
convertToRoman(36);















my wrong solution 

function convertToRoman(num) {
    var ans = '';

    function digits(digit_num1) {
        var x = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
        // console.log(x.index())
        x.forEach(function (item, index, array) {
            if (num == index) {
                return ans = item;
            }
        });
    }
    digits(num);
    function tenDigits(ten_digit)
    if (String(num).length == 2) {
        
        var y = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']

        return 'XII';
    }
    return ans;
}

convertToRoman(36);
convertToRoman(3999);
convertToRoman(2014);
