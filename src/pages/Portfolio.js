import React from "react";
import background from "../images/backgrounds/Portfolio.gif";
import Menu from "../components/Menu";

function Portfolio() {
    return (
        <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Menu/>
        </div>
    );
}

export default Portfolio;