const { Component } = require("react");

class MusicPlaye extends Component {
  state = {
    currentsong:"tamil",
    playlist:"12",
  };
  render() {
    return <div>
        <h1>Music Player</h1>
        <p>{this.state.currentsong}</p>
        <p>{this.state.playlist}</p>
    </div>
  }
}
export default MusicPlaye