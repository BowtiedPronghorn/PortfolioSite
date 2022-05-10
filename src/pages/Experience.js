import React from "react";
import background from "../images/backgrounds/Experience.webp";
import Menu from "../components/Menu";

import './Experience.css';

function Experience() {
    const listItems = ['Developer', 'Engineer', 'DeFi', 'Entrepeneur'];

    return (
        <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Menu/>
            <div className={"Container"}>
                <ul>
                    <p>What have I done so far?</p>
                    {listItems.map((item, idx) => (
                        <li className="fade-list-item" style={{ animationDelay: `${1500 * idx}ms` }}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Experience;