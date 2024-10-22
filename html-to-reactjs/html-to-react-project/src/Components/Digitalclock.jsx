import React, { Component } from "react";

export class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const currentTime = new Date();

    this.setState({
      hours: (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours(),
      minutes:
        (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes(),
      seconds:
        (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds(),
    });
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div>
        <h1>Digital Clock</h1>
        <h1>
          {hours}:{minutes}:{seconds}
        </h1>
      </div>
    );
  }
}


