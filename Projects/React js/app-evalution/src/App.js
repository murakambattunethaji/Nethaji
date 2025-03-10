import React from "react";
import video1 from "../src/assets/video1.mp4";
import image1 from "../src/assets/image1.png";
import image2 from "../src/assets/image2.png";
import image3 from "../src/assets/image3.png";

const Background = ({playStatus,heroCount}) => {

    if (playStatus) {
        return (
            <video className="background fade-in" autoPlay loop muted>
                <source src={video1} type="video/mp4"/>
            </video>
        )
    }
    else if(heroCount===0) {
        return <img src={image1} className="background fade-in" alt="" />
    }
    else if(heroCount===1) {
        return <img src={image2} className="background fade-in" alt="" />
    }
    else if(heroCount===2) {
        return <img src={image3} className="background fade-in" alt="" />
    }
    return (
        <div>

        </div>
    )
}

export default Background;