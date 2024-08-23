import React, { useState } from "react";
import "./App.css";

function App() {
  const [bgImage, setBgImage] = useState(
    "https://th.bing.com/th/id/OIP.i4gn7MbTOHqpWaaTcenevgHaEK?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/R.3d042c92d9b167c065d4875c964d0b4a?rik=j%2bwe8hUaZqdmSA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f74165-nature-HDR-river-trees-mountain-landscape.jpg&ehk=yHKVetDTiL5y89jHLEMdJx0A%2f0iGuZctDOo3T9ozKvg%3d&risl=&pid=ImgRaw&r=0,","https://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-33.jpg"
  );

  const changeBackground = () => {
    setBgImage((prevBgImage) =>
      prevBgImage === "https://th.bing.com/th/id/R.3d042c92d9b167c065d4875c964d0b4a?rik=j%2bwe8hUaZqdmSA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f74165-nature-HDR-river-trees-mountain-landscape.jpg&ehk=yHKVetDTiL5y89jHLEMdJx0A%2f0iGuZctDOo3T9ozKvg%3d&risl=&pid=ImgRaw&r=0"
        ? "https://th.bing.com/th/id/OIP.i4gn7MbTOHqpWaaTcenevgHaEK?rs=1&pid=ImgDetMain"
        : "https://images.hdqwalls.com/download/sunset-nature-trees-img-3840x2160.jpg"
    );
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button className="change-bg-btn" onClick={changeBackground}>
        Change Background
      </button>
    </div>
  );
}

export default App;
