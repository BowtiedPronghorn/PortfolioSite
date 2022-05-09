import './Movingtext.css';

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

//const movingTexts = ['Python', 'Solidity', 'JavaScript', 'Deep Learning', 'Smart Contracts']
const movingTexts = ['Smart Contract Engineer', 'Python Developer', 'Javascript/React Developer', 'Machine Learning Engineer', 'Smart Contract Developer', 'Back-end Engineer', 'Front-end Developer', 'DeFi Enthusiast', 'Full-Stack Developer'];

const Movingtext = () => {
    const [key, setKey] = useState(1);
    const [textIndex, setTextIndex] = useState(0);
    const [movingText, setMovingText] = useState(movingTexts[0]);

    const scrolling = useSpring({
        from: { transform: "translate(300%,0)" },
        to: { transform: "translate(-300%,0)" },
        config: { duration: 10000 }, //Todo: Fiddle with these settings to make the text movement look better
        reset: true,
        //reverse: key % 2 == 0,
        onRest: () => {
            setKey(key + 1);
            setTextIndex(textIndex+1);
            setMovingText(movingTexts[textIndex+1]);

            if (textIndex === movingTexts.length-1) {
                setTextIndex(0);
                setMovingText(movingTexts[0]);
            }
        }
    });

    return (
        <div key={key}>
            <animated.div style={scrolling}>{movingText}</animated.div>
        </div>
    );
};

export default Movingtext;