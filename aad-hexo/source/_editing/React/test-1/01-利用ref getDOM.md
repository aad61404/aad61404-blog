# 如何在React Get DOM
[Ref 和 DOM](https://zh-hant.reactjs.org/docs/refs-and-the-dom.html)


Ref 和 DOM
Ref 提供了一種可以取得 DOM 節點或在 render 方法內建立 React element 的方式。

在典型的 React 資料流裡，props 是 parent component 和 child component 唯一的互動方式。你會藉由使用新的 prop 重新 render 來改變你的 child。然而，有些情況下你需要在典型的資料流以外更改你的 child。這個被更改的 child 可能是 React component 的其中一個 instance，或他可能是個 DOM element。在這兩種情況下，React 提供了「逃生口」。

什麼時候該使用 Ref
有幾種適合使用 ref 的情況：

管理 focus、選擇文字、或影音播放。
觸發即時的動畫。
與第三方 DOM 函式庫整合。
避免在任何可以宣告性完成事情的地方使用 ref。

例如，不要把 Dialog component 上的 open() 和 close() 對外公開，應該將 isOpen 的 prop 傳進去。

不要過度使用 Ref
你一開始可能會傾向於在應用程式裡使用 ref「讓事情發生」。如果這是你的情形，花點時間認真思考一下 state 應該在哪個 component 的層級被持有。通常你會清楚發現，在高層級的地方持有是比較合適的位置。請參閱提升 。

參考  Demo.jsx
```
// Demo.jsx
import React from 'react';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    // 產生一個可以儲存 textInput DOM element 的 ref
    this.textInput = React.createRef();
    this.textP = React.createRef();
    this.changeValue = this.changeValue.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    // 特別利用原生的 DOM API 來關注文字的輸入
    // 注意：我們正利用「current」來取得 DOM 節點
    this.textInput.current.focus();
  }
  changeValue() {
    this.textP.current.innerHTML = 'changed !';
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <button onClick={this.focusTextInput}>Focus the text input</button>
       
        <p ref={this.textP}>test test</p>
        <button onClick={this.changeValue}>change value</button>
      </div>
    );
  }
}

```