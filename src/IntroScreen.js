import React from 'react';
import './App.css';
import logo from './pictures/aware-logo.png';

// Since this intro screen is just to replicate the process of opening the Aware
// Super app, the logo is only meant to be displayed for a short period of time
function IntroScreen(props) {

    if (props.page === 0) {
        return (
            <div className="start">
                <img src={logo} alt="" className="awarelogo"/>
            </div>
        );
    } else {
        return (null);
    }
};


export default IntroScreen;
