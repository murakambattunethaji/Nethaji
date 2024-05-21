import { useState } from "react"


export var InventoryManagementSystem=()=>{

    var [InventoryManagementSystem]=useState(
        {
            productname:"Apple",
            quantityavailable:10,
            price:100000,
            newproducts:function(){},
            updatequantities:function(){},
            removeproducts:function(){},
        }
    )

    return <div>
        <h1>Inventory Management System</h1>
        <ul>
            {Object.keys(InventoryManagementSystem).map((key)=>{
                return <li>{InventoryManagementSystem[key]}</li>
            })}
        </ul>
    </div>
}