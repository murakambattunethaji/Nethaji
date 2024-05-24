import { useState } from "react"


export  var SubscriptionService=()=>{

    var [SubscriptionService]=useState(
        {
            subscriptionname:"wertyui",
            price:"sdfghj",
            renewaldate:"asdfg",
            subscribe:function(){},
            unsubscribe:function(){},
            viewsubscriptiondetails:function(){},
        
        }
    )

    return <div>
        <h1>Subscription Service</h1>

        <ul>
            {Object.keys(SubscriptionService).map((key)=>{
                return <li>{SubscriptionService[key]}</li>
            })}
        </ul>
    </div>
}