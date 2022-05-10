import React from "react";
import background from "../images/backgrounds/Interests.gif";
import Menu from "../components/Menu";

function Interests() {
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

export default Interests;