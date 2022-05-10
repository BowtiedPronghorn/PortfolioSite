import React from "react";
import background from "../images/backgrounds/About.gif";
import Menu from "../components/Menu";

function About() {
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

export default About;