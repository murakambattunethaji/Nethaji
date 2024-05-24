import { Component } from "react";


class EcommerceCart extends Component{

    state={
        items:"apple",
        quantity:"10",
        price:"100000",
    }

    render(){
        return <div>
            <h1>E-commerce Cart</h1>
            <p>{this.state.items}</p>
            <p>{this.state.quantity}</p>
            <p>{this.state.price}</p>
        </div>
    }
}

export default EcommerceCart