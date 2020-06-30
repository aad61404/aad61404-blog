

# props 跟 props.child傳遞方式 

##### ... 代表 省略的程式碼
#### index.js

```
...

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CustomButton text="步上台階">
          <button> 看天上 </button>
        </CustomButton>
      </div>
    );
  }
}

...

```

#### 02-0-CustomButton.jsx

```
...

    render() {
        return (
            <div>
                <button onClick = {this.Click} >Click me! </button>
                <button onClick = {this.CreateP} >CreateP ! </button>
                <p>{this.props.text}</p>
                <p>{this.props.children}</p>
            </div>
        )
    }

...

```


### export 用法

##### abc.jsx
```
export const a = 'a';
export const b = 'b';
export const c = 'c';
```

###### index.js

```
import React from 'react'
import ReactDOM from 'react-dom'
import { a , b, c} from './abc.jsx'

...

```
