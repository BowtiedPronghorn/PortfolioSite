import React, {useState} from 'react';
import background from "../images/backgrounds/About.gif";
import './About.css';

import Menu from "../components/Menu";


function About() {

    const listItems = ['Anonymous Jungle Animal', 'Full Stack Developer', 'Smart Contract Engineer', 'DeFi Enthusiast'];
    const [Animal_Text, setAnimal] = useState(<div></div>)
    const [Dev_Text, setDev] = useState(<div></div>)
    const [Eng_Text, setEng] = useState(<div></div>)
    const [DeFi_Text, setDeFi] = useState(<div></div>)

    function openAnimal() {
        setAnimal(<div className={"popup_about"} onClick={closeDiv}>
            <span>
                Animal text placeholder
            </span>
        </div>)
    }

    function openDev() {
        setDev(<div className={"popup_about"} onClick={closeDiv}>
            <span>
                Dev text placeholder
            </span>
        </div>)
    }

    function openEng() {
        setEng(<div className={"popup_about"} onClick={closeDiv}>
            <span>
                Engineer text placeholder
            </span>
        </div>)
    }

    function openDeFi() {
        setDeFi(<div className={"popup_about"} onClick={closeDiv}>
            <span>
                DeFi text placeholder
            </span>
        </div>)
    }

    function closeDiv() {
        setAnimal(<div></div>)
        setDev(<div></div>)
        setEng(<div></div>)
        setDeFi(<div></div>)
    }

    return (
        <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Menu/>
            {Animal_Text}
            {Dev_Text}
            {Eng_Text}
            {DeFi_Text}
            <div className={"Container_About"}>
                <ul>
                    <p>Who am I?</p>
                    <li className="fade-list-item" onClick={openAnimal} style={{ animationDelay: `${1500}ms` }}>
                        <button className="button_about">{listItems[0]}</button>
                    </li>
                    <li className="fade-list-item" onClick={openDev} style={{ animationDelay: `${1500 * 2}ms` }}>
                        <button className="button_about">{listItems[1]}</button></li>
                    <li className="fade-list-item" onClick={openEng} style={{ animationDelay: `${1500 * 3}ms` }}>
                        <button className="button_about">{listItems[2]}</button>
                    </li>
                    <li className="fade-list-item" onClick={openDeFi} style={{ animationDelay: `${1500 * 4}ms` }}>
                        <button className="button_about">{listItems[3]}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;