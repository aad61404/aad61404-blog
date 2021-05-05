function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

// 6.3.2 子類別初始化
// 現在可以開始宣告能繼承父類別建立子類別的方法
Object.subClass = function (properties) {
    var _super = this.prototype;
}
// 這裡會再Object加入subClass()方法 接受一個參數，含有欲加入子類別的屬性
/*
為了運用函式原型來模擬繼承關係，此處使用先前以介紹過的技巧，建立父類別的實體，並指派給子類別的原型prototype
若「不」使用先前的實做，需要建立類似下列程式:
*/
function Person() {}

function Ninja() {}
Ninja.prototype = new Person();
assert((new Ninja()) instanceof Person, 'Ninjas are people too!');

/*
 這片程式碼片段不好的地方在於 我們真正想要的是instanceof 但不想要負擔實體化Person 物件的全部花費、並回傳它的建構式。
 因此，這份實作裡有個變數initializing，每當想要建立實體化類別，而唯一的目的是用來作為原型時，就會設為true
 那麼，當到了要建立實體的時刻，我們就能區分是否位於初始化模式中，依據結果執行或跳過init()方法:
 
 if(!initializing && this.init)
     this.init.apply(this, arguments);
 
     特別重要的是init() 方法可以執行任何昂貴初始化動作(連接伺服器、建立DOM ...)
     所以每當我們只是想建立實體作為原型時，就可以免卻執行不必要且昂貴初始化程式碼。
*/

/*
 接下來需要複製子類別才有的屬性，從傳入的參數取得後，放進原型實體裡。聽起來不難，但並非如此
*/
/*
 大部分繼承程式語言，當改寫某方法時，仍保有能力可以存取被改寫的方法。
 這點很有用，因此有時我們想要完全取代某方法的功能，但有時卻只想要擴充原有的功能。
 此處時做裡，建立暫時性方法，名為_super，只能從繼承後的方法裡存取，以之指向父類別的原方法。

 舉例回頭看6.20 程式碼，當想要呼叫父類別的建構式，作法如下(為了簡化，刪掉部分程式碼)
*/
var Person = Object.subClass({
    init: function (isDancing) {
        this.dancing = isDancing;
    }
})

var Ninja = Person.subClass({
    init: function () {
        this._super(false);
    }
});
/*
 在Ninja 建構式裡，呼叫了Person建構式，傳入適當的值。
 這樣一來就可以避免複製貼上程式碼，父類別已經有我們需要的執行程式，何不善加利用呢 ?
*/
/*
想要實作這項功能(6.21程式碼) 需要多個步驟，為了跟據傳入subClass()屬性，以之擴充子類別，僅需合併父類別屬性與傳入的屬性
*/
initializing = true;
var proto = new this();
initializing = false;
/*
請注意其中變數如何以 initializing 來「保護」初始化程式，先前小節已經討論過
接著可以把傳入的屬性合併到proto物件(原型的原型，如果你想這麼說的話)
*/

//   如果不在意父類別函式的話，就會是個簡單的任務:
for (var name in properties) proto[name] = properties[name];

/*
  但我們的確在意父類別函式，所以上面實作若想要呼叫父類別方法的情況，就不適用。
  若碰到改寫方法裡透過_super 存取父類別方法的情況，便需要把子類別方法包起來，加上能夠經由屬性名_super 指向父類別方法的一層。
*/
/*
   那在這麼作之前，需要判斷甚麼時候才需要為子類別方法再包一層，判斷方式如底下條件:
*/

typeof properties[name] == "function" &&
    typeof _super[name] == "function" &&
    superPattern.test(properties[name])
/*
    三個部分檢查三件式
    子類別屬性是函式嗎?
    父類別屬性是函式嗎?
    子類別函式有_super()嗎 ?
*/
/*
   三個條件為true ，才需要複製屬性值的動作之外做額外處理。
   使用小節6.3.1所設定的正規表達式，以及函式序列化，來檢查方法是否呼叫它的父方法。 
   若條件運算式判斷後顯示我們必須再包一層，做法是把底下立即函式的結果指派給類別屬性
*/

(function (name, fn) {
    return function () {
        var tmp = this._super;
        this._super = _super[name];

        var ret = fn.apply(this, arguments);
        this._super = tmp;
        return ret;
    }
})(name, properties[name])

/*
這個立即函式所建立並回傳新函式，包裹了子類別函式並執行，並擁有能力可透過_super屬性來呼叫父類別函式。首先，當個好公民
備份舊的this_super(不論是否已經存在) 做完事之後再恢復。這麼做可以避免以存在同名變數所造成的問題(你可不想因為意外而摧毀它)

接著建立新方法_super，僅是指向存在父類別原型裡的方法，不必再做額外修改，或式做任何重新設定範圍的動作；當它是物件的屬性實，函式
上下文將會自動設定(this 將會指向我們的實體，而非父類別)。 
最後呼叫原方法，若能正常運作(可能也會使用_super)，然後恢復_super會到原始狀態，從函式回傳
能夠達成同樣效果做法(某些實作會把_super方法綁訂到方法本身，可從arguments.callee存取)，然而此處提供的技巧，既具備可用性，實作而言相對簡單

*/
// 首先學習prototype 是什麼 ? 當函式呼叫加上 new 運算子變成建構式時， prototype又扮演什麼角色 ? 
// 當我們學會函式作為建構式會有什麼行為，並且作為一般函式的呼叫有何差異
// 然後介紹如何判斷物件類型，找出式哪些建構式產生你手上的物件
// 接著探索繼承的物件導向概念，學習如何使用原型鏈來影響JavaScript 的程式繼承關係
// 為了避免落入各種陷阱，我們介紹了常見的淺在危機，一不注意就會出來絆倒你
// 關於擴充Object 與其他原生注意事項，也介紹如何增加防護措施，避免使用者錯用我們提供的建構式
// 本章最後提供一套與法 能夠用來JavaScript 裡繼承父類別並撰寫新的子類別，並建立方法實作這套與法

// 由於原型所提供的擴充能力相當高，於式能賦予開發人員一套極為多樣性平台