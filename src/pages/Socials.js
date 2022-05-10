import React from "react";
import background from "../images/backgrounds/Socials.gif";
import Menu from "../components/Menu";

function Socials() {
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

export default Socials;