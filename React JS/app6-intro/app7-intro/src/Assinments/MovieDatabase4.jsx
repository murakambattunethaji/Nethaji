const { Component } = require("react");

class MovieDatabase extends Component {
  state = {
    movietitle:"rrr",
    director:"r.r.rajmouli",
  };
  render() {
    return <div>
        <h1>Movie Data base</h1>
        <p>{this.state.movietitle}</p>
        <p>{this.state.director}</p>
    </div>
  }
}
export default MovieDatabase