import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

const App = () => {
    return (
        <div className="w-full min-h-screen h-auto bg-[#171717]">
            <Router>
                <Navbar />
                <Home />
            </Router>
        </div>
    );
};

export default App;