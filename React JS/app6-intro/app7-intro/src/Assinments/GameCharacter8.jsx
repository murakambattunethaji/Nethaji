const { Component } = require("react");

class GameCharacter extends Component {
  state = {
    name:"groot",
    level:"59 lev",
    health :"200 hp"
  };
  render() {
    return <div>
        <h1>Game Character</h1>
        <p>{this.state.name}</p>
        <p>{this.state.level}</p>
        <p>{this.state.health}</p>
    </div>
  }
}
export default GameCharacter