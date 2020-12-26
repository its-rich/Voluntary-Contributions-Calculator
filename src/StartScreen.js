import React, { useEffect, useState } from 'react';
import './App.css';
import startIMG from './pictures/images.png';

// This will just display the start screen until the user clicks the start button
function StartScreen(props) {

    if (props.page === 1) {
        return (
            <div className="intro">
                <div style={{animation:"fadein 3s linear"}}>
                Learn Why You Should Make Voluntary Contributions Today
                </div>

                <div className="container" style={{color:"#e5007e", marginTop: "3vh"}}>
                    <div>
                        <img src={startIMG} alt="" className="startIMG" style={{animation:"fadein 3s linear"}}/>
                    </div>

                    <div>
                    <button className="btn btn-lg btn-dark" style={{animation:"fadeinlate 3s linear", width: "200px", }} onClick={() => props.nextPage()}>
                        <span>Start</span>
                        <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>
                        arrow_right_alt
                        </span>
                    </button>
                    </div>
                </div>

            </div>
        );
    } else {
        return (null);
    }
};


export default StartScreen;
