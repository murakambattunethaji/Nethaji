const { Component } = require("react");

class InventoryManagementSystem extends Component {
  state = {
    productname:"apple",
    quantityavailable:"10",
  };
  render() {
    return <div>
        <h1>Inventory Management System</h1>
        <p>{this.state.productname}</p>
        <p>{this.state.quantityavailable}</p>
    </div>
  }
}
export default InventoryManagementSystem