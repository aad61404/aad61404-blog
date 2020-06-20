import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      currentTime: new Date().toLocaleString()
    };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  updateTime = () => {
    this.setState({
      currentTime: new Date().toLocaleString()
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {this.tick();}, 1000);
    this.timerId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <div> Seconds: {this.state.seconds} </div>
        <div> {currentTime}</div>
      </div>
    );
  }
}
