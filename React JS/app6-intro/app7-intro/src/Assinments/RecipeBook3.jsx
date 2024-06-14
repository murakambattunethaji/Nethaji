const { Component } = require("react");

class RecipeBook extends Component {
  state = {
    recipename:"chicken curry",
    ingredients:"chicken masala"
  };
  render() {
    return <div>
        <h1>Recipe Book</h1>
        <p>{this.state.recipename}</p>
        <p>{this.state.ingredients}</p>
    </div>
  }
}
export default RecipeBook