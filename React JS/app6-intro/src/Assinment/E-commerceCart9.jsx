import { useState } from "react"


export var EcommerceCart = () => {

    var [EcommerceCart] = useState(
        {
            item: "apple",
            quantity: 10,
            price: 80000,
            items: function () { },
            removeitems: function () { },
            updatequantities: function () { },
            calculatetotalprice: function () { },
        }
    )

    return <div>
        <h1>E-commerce Cart</h1>
        <ul>
            {Object.keys(EcommerceCart).map((key) => {
                return <li>{EcommerceCart[key]}</li>
            })}
        </ul>
    </div>
}