import React, {useState} from 'react';
import background from "../images/backgrounds/Experience.webp";
import Menu from "../components/Menu";

import './Experience.css';

function Experience() {
    const listItems = ['Developer', 'Engineer', 'DeFi', 'Entrepeneur'];
    const [Dev_Text, setDev] = useState(<div></div>)
    const [Eng_Text, setEng] = useState(<div></div>)
    const [Defi_Text, setDefi] = useState(<div></div>)
    const [Entr_Text, setEntr] = useState(<div></div>)

    function openDev() {
        setDev(<div className={"popup_exp"} onClick={closeDiv}>
            <span>
                Dev text placeholder
            </span>
        </div>)
    }

    function openEng() {
        setEng(<div className={"popup_exp"} onClick={closeDiv}>
            <span>
                Eng text placeholder
            </span>
        </div>)
    }

    function openDefi() {
        setDefi(<div className={"popup_exp"} onClick={closeDiv}>
            <span>
                Defi text placeholder
            </span>
        </div>)
    }

    function openEntr() {
        setEntr(<div className={"popup_exp"} onClick={closeDiv}>
            <span>
                Entrepeneur text placeholder
            </span>
        </div>)
    }

    function closeDiv() {
        setDev(<div></div>)
        setEng(<div></div>)
        setDefi(<div></div>)
        setEntr(<div></div>)
    }

    return (
        <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Menu/>
            {Dev_Text}
            {Eng_Text}
            {Defi_Text}
            {Entr_Text}
            <div className={"Container_Experience"}>
                <ul>
                    <p>What have I done so far?</p>
                    <li className="fade-list-item" onClick={openDev} style={{ animationDelay: `${1500}ms` }}>
                        <button className="button_exp">{listItems[0]}</button>
                    </li>
                    <li className="fade-list-item" onClick={openEng} style={{ animationDelay: `${1500 * 2}ms` }}>
                        <button className="button_exp">{listItems[1]}</button></li>
                    <li className="fade-list-item" onClick={openDefi} style={{ animationDelay: `${1500 * 3}ms` }}>
                        <button className="button_exp">{listItems[2]}</button>
                    </li>
                    <li className="fade-list-item" onClick={openEntr} style={{ animationDelay: `${1500 * 4}ms` }}>
                        <button className="button_exp">{listItems[3]}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;