import React from "react";
import background from "../images/backgrounds/Interests.gif";
import Menu from "../components/Menu";

import './Interests.css';

function Interests() {

    const listItems = ['DeFi', 'Fitness', 'Cooking', 'Travelling'];

    return (
        <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Menu/>
            <div className={"Container"}>
                <ul>
                    <p>What do I like?</p>
                    {listItems.map((item, idx) => (
                        <li className="fade-list-item" style={{ animationDelay: `${1500 * idx}ms` }}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Interests;