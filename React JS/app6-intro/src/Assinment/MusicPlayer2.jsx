import { useState } from "react"

export var MusicPlayer = () => {

    var [MusicPlayer] = useState(
        {
            current_song:"hindi",
            playlist:function(){},
            play:function(){},
            pause:function(){},
            skip:function(){},
            shufflesongs:function(){},
        }
    )

    return <div>
        <h1>Music Player</h1>
        <ul>
            {Object.keys(MusicPlayer).map((key)=>{
                return <li>{MusicPlayer[key]}</li>
            })}
        </ul>
    </div>


}