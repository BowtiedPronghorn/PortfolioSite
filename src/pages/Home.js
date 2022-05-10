//import React, {useState, Component} from 'react'
import './Home.css';
import background from "../images/backgrounds/Home.webp";
import deer from "../images/gifntext-gif.gif";

import Movingtext from "../components/Movingtext";

import ImageFadeIn from "react-image-fade-in";
import Menu from "../components/Menu";


function Home() {

    return (
        <div className="App"
             style={{
                 backgroundImage: "url(" + background + ")",
                 backgroundSize: "cover",
                 height: "100vh",
             }}>
            <Menu/>
            <header className="App-header">
                <ImageFadeIn width={640} height={480} opacityTransition={3} src={deer} />
                <Movingtext/>
            </header>
        </div>
    );
}

export default Home;
