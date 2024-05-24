const { Component } = require("react");

class ChatApplication extends Component {
  state = {
    sender:"nethaji",
    receiver:"sai",
  };
  render() {
    return <div>
        <h1>Chat App lication</h1>
        <p>{this.state.sender}</p>
        <p>{this.state.receiver}</p>
    </div>
  }
}
export default ChatApplication