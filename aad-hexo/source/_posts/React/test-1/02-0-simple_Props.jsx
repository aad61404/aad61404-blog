// Demo.jsx
import React from 'react';
import CustomButton from './CustomButton.jsx';

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
