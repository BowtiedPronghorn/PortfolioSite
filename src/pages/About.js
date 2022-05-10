import React from "react";
import background from "../images/backgrounds/About.gif";
import Menu from "../components/Menu";
import './About.css';

function About() {

    const listItems = ['Anonymous Jungle Animal', 'Full Stack Developer', 'Smart Contract Engineer', 'DeFi Enthusiast'];

    return (
        <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Menu/>
            <div className={"Container"}>
                <ul>
                    <p>Who am I?</p>
                    {listItems.map((item, idx) => (
                        <li className="fade-list-item" style={{ animationDelay: `${1500 * idx}ms` }}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default About;