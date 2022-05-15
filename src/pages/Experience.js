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
                    I currently work as a web developer building the backend infrastructure for large cloud applications.
                For these applications I will design the infrastructure and help with the implementation. This requires
                lots of hands-on experience building scalable backends that can handle lots of traffic while keeping
                costs as low as possible. <br/><br/>
                    Most of my experience is in AWS/Azure, Django, Kubernetes, and Machine Learning. But lately I have
                been getting lots of experience in React/Javascript and Solidity, as can be seen in my portfolio.
            </span>
        </div>)
    }

    function openEng() {
        setEng(<div className={"popup_exp"} onClick={closeDiv}>
            <span>
                    Originally I entered the workforce as a machine learning engineer looking to solve complicated data
                related problems. I have published several academic papers in the field, taught deep learning, software
                development, and statistics on the masters course, and worked several years as a researcher.<br/><br/>
                    However, when I entered the workforce as a machine learning engineer I quickly learned that I enjoyed
                the web-development part of the process much more than the machine learning part. I have many years of
                experience translating complex business problems into machine learning solutions and implementing these
                successfully.
            </span>
        </div>)
    }

    function openDefi() {
        setDefi(<div className={"popup_exp"} onClick={closeDiv}>
            <span>
                    After coming into contact with DeFi in the summer of 2020 I quickly became enamoured by the idea of
                decentralised blockchain technologies and have been an active member of the community since. I started
                contributing wherever I could. For example, I was a member of the
                <a href={"https://dao.neworder.network/voting/0xad156e44644d29ff1cc897fd757cc4e9a94d09c11ffa4b9ed9e79ba86dd2419d"}
                className={"text-link"}> NewOrder evaluation basecamp committee</a> where I
                reviewed applications for VC investments and advised the DAO on which investments to pursue. <br/><br/>
                    Now, I am looking to get involved as a developer for DAO's. If you have any work, feel free to
                contact me through twitter, discord, or email.
            </span>
        </div>)
    }

    function openEntr() {
        setEntr(<div className={"popup_exp"} onClick={closeDiv}>
            <span>
                    One of my passions is entrepreneurship. My whole life I have been setting up businesses which has
                been a large contributor to the development of my skills. Most recently, I successfully exited a
                company that developed medical software. As the sole owner and employer of the company I was responsible
                for the development and sale of the software.<br/><br/>
                    Other businesses I have run where running from content-websites to ecommerce and everything in between.
                However, I have found the most success and enjoyment in software development.
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