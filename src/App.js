//import React, {useState, Component} from 'react'
import './App.css';
import background from "./Images/road-bg.webp";
import deer from "./Images/gifntext-gif.gif";

import Movingtext from "./components/Movingtext";

import ImageFadeIn from "react-image-fade-in";
import Menu from "./components/Menu";


function App() {

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

export default App;
