import React from "react";
import "../tailwind.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: props.time };
  }
  render() {
    return <div className="te">It is {this.state.seconds}</div>;
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState(function(prevState, props) {
      if (prevState.seconds <= 0) {
        clearInterval(this.timerID);
        return { seconds: 0 };
      }
      return { seconds: prevState.seconds - 1 };
    });
  }
}
export default Timer;
