import background from "../images/backgrounds/Interests.gif";
import React, {useState} from 'react'

import Menu from "../components/Menu";

import './Interests.css';

function Interests() {

    const listItems = ['DeFi', 'Fitness', 'Cooking', 'Travelling'];
    const [DeFi_Text, setDeFi] = useState(<div></div>)
    const [Fitness_Text, setFitness] = useState(<div></div>)
    const [Cooking_Text, setCooking] = useState(<div></div>)
    const [Travelling_Text, setTravelling] = useState(<div></div>)

    function openDeFi() {
        setDeFi(<div className="popup" onClick={closeDiv}>
            <span>
                I first discovered DeFi in the summer of 2020 when a friend introduced me to the concept of smart-contracts.<br/><br/>
            Ever since I have closely followed the developments of DeFi as both a fan and a contributor.<br/><br/>
                Following the <a href={"https://defieducation.substack.com"} className={'text-link'}>DeFi-Education
            substack</a> and being involved with several DAO's has kept me up to date on the
            developments of DeFi and allowed me to meet some incredible people.<br/><br/>
                The technology that fuels decentralised applications fascinated me and drew me in
            to study and develop, but the community and people I met along the way is what keeps me here.<br/><br/>
                I'm hoping to stay involved with crypto for a long time and contribute as a developer.
            </span>
        </div>)
    }

    function openFitness() {
        setFitness(<div className={"popup"} onClick={closeDiv}>
            <span>
                Fitness text placeholder
            </span>
        </div>)
    }

    function openCooking() {
        setCooking(<div className={"popup"} onClick={closeDiv}>
            <span>
                Cooking text placeholder
            </span>
        </div>)
    }

    function openTravelling() {
        setTravelling(<div className={"popup"} onClick={closeDiv}>
            <span>
                Travelling text placeholder
            </span>
        </div>)
    }

    function closeDiv() {
        setDeFi(<div></div>)
        setFitness(<div></div>)
        setCooking(<div></div>)
        setTravelling(<div></div>)
    }

    return (
        <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Menu/>
            {DeFi_Text}
            {Fitness_Text}
            {Cooking_Text}
            {Travelling_Text}
            <div className={"Container_Interests"}>
                <ul>
                    <p>What do I like?</p>
                    <li className="fade-list-item" onClick={openDeFi} style={{ animationDelay: `${1500}ms` }}>
                        <button>{listItems[0]}</button>
                    </li>
                    <li className="fade-list-item" onClick={openFitness} style={{ animationDelay: `${1500 * 2}ms` }}>
                        <button>{listItems[1]}</button></li>
                    <li className="fade-list-item" onClick={openCooking} style={{ animationDelay: `${1500 * 3}ms` }}>
                        <button>{listItems[2]}</button>
                    </li>
                    <li className="fade-list-item" onClick={openTravelling} style={{ animationDelay: `${1500 * 4}ms` }}>
                        <button>{listItems[3]}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Interests;