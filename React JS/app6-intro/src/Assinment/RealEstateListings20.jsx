import { useState } from "react"


export var RealEstateListings=()=>{

    var [RealEstateListings]=useState(
        {
            propertytype:"land",
            price:"10000",
            location:"chittoor",
            addnewlistings:function(){},
            removelistings:function(){},
            searchforlistingsbycriteria:function(){},
        }
    )

    return <div>
        <h1>Real Estate Listings</h1>

        <ul>
            {Object.keys(RealEstateListings).map((key)=>{
                return <li>{RealEstateListings[key]}</li>
            })}
        </ul>
    </div>
}