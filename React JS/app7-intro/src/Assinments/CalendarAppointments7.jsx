const { Component } = require("react");

class CalendarAppointments extends Component {
  state = {
    eventname:"drums",
    date:123445,
  };
  render() {
    return <div>
        <h1>Calendar Appointments</h1>
        <p>{this.state.eventname}</p>
        <p>{this.state.date}</p>
    </div>
  }
}
export default CalendarAppointments