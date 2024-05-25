

const { Component } = require("react");

class TaskTracker extends Component {
    state = {
        taskname:"track",
        duedate:"20122025"
    };
    render() {
        return <div>
            <h1>Task Tracker</h1>
            <p>{this.state.taskname}</p>
            <p>{this.state.duedate}</p>
        </div>
    }
}
export default TaskTracker