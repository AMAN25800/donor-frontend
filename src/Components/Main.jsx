import React from 'react';
import './Main.css';
import Navbar from './Navbar';
import Slider from './Slider';
import VisionMission from './VissionMission';

const Main = () => {
    return (
        <>
            <div id="main">
                <div id="navbar"><Navbar /></div>
                <div id="slide"><Slider /></div>
                <div id="vision">
                    <VisionMission />
                </div>
            </div>
        </>
    );
};

export default Main;
