import { useState } from "react"


export var WeatherApp=()=>{

    var [WeatherApp]=useState(
        {
            temperature:"12",
            humidity:"cloudy",
            windspeed:125,
            updateweatherdata:function(){},
        }
    )

    return <div>
<h1>Weather App</h1>
        <ul>
            {Object.keys(WeatherApp).map((key)=>{
                return <li>{WeatherApp[key]}</li>
            })}
        </ul>
    </div>
}