測試
var a =2;
console.assert(a==1, 'Disater! a is not 1!');
<!-- VM231:2 Assertion failed: Disater! a is not 1! -->

效能分析
start = new Date().getTime();
for (var n= 0; n < maxCount; n++) {
// 執行想要測量的動作
}
elapsed = new Date().getTime() - start;
assert(true, "Measured time:" + elapsed);

2.1.2 中斷點
https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints

3.2
var canFly = function () {
    return true;
};
console.log(canFly.name); // canFly

window.wieldsSword = function swingsSword() {
    return true;
};

assert(window.wieldsSword.name === 'swingsSword',"wieldSword's real name is swingsSword");
console.log(wieldsSword.name); //swingsSword


3.3 作用域
