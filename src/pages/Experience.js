import React from "react";
import background from "../images/backgrounds/Experience.webp";
import Menu from "../components/Menu";

function Experience() {
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

export default Experience;