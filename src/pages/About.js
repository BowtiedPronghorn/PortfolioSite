import React, {useState} from 'react';
import background from "../images/backgrounds/About.gif";
import './About.css';

import Menu from "../components/Menu";


function About() {

    const listItems = ['Full Stack Developer', 'Smart Contract Engineer', 'DeFi Enthusiast'];
    const [Dev_Text, setDev] = useState(<div></div>)
    const [Eng_Text, setEng] = useState(<div></div>)
    const [DeFi_Text, setDeFi] = useState(<div></div>)

    function openDev() {
        setDev(<div className={"popup_about"} onClick={closeDiv}>
            <span>
                    I have spent the entirety of my career working as a developer. Mostly as a backend developer and
                as a machine learning engineer. After working on many different parts of the development process I have
                become comfortable enough with all parts of building and deploying a webapp. <br/><br/>
                    While I am most comfortable as a back-end developer, my portfolio shows a wide range of skills from
                Django, Machine-Learning, to React and Javascript. In my career I have built and deployed full-stack
                applications in many different professional settings.
            </span>
        </div>)
    }

    function openEng() {
        setEng(<div className={"popup_about"} onClick={closeDiv}>
            <span>
                    As a software engineer I spend a lot of time working with cloud development environments. When I
                discovered smart contracts it opened a whole new way of thinking about web development. After reading
                everything I could find about smart contracts and blockchain development I decided to start learning
                how to apply this technology. I took a few courses and started building some basic dApps. <br/><br/>
                    One of these can be found on <a href={"http://www.ethscrow.xyz"} className={'text-link'}>Ethscrow.xyz</a>.
                This is an example dApp I built and deployed on the Ropstein testnet. Since then I have been
                contributing to protocols and developing in my free time to hone my skills as a smart contract engineer.
            </span>
        </div>)
    }

    function openDeFi() {
        setDeFi(<div className={"popup_about"} onClick={closeDiv}>
            <span>
                    For as long as I can remember I have been passionate about building things. As a child I would
                make my own video-games, websites, and businesses. There's something extremely rewarding about making
                something and seeing others use what you've built. When I discovered DeFi I found a community of
                like-minded people where everyone is invited to help build. As much as I love the technology behind
                these blockchain applications, I am equally passionate about contributing to the community that has
                developed around these appliations. <br/><br/>
                    At this point I can safely say that DeFi is a large part of my identity. I spend a large part of my
                days following the news around crypto, checking up with friends and projects, and developing or
                contributing. My dream is to find a job in the industry that allows me to work with crypto full-time.
            </span>
        </div>)
    }

    function closeDiv() {
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
            {Dev_Text}
            {Eng_Text}
            {DeFi_Text}
            <div className={"Container_About"}>
                <ul>
                    <p>Who am I?</p>
                    <li className="fade-list-item" onClick={openDev} style={{ animationDelay: `${1500}ms` }}>
                        <button className="button_about">{listItems[0]}</button></li>
                    <li className="fade-list-item" onClick={openEng} style={{ animationDelay: `${1500 * 2}ms` }}>
                        <button className="button_about">{listItems[1]}</button>
                    </li>
                    <li className="fade-list-item" onClick={openDeFi} style={{ animationDelay: `${1500 * 3}ms` }}>
                        <button className="button_about">{listItems[2]}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;