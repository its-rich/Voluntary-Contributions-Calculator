import React, { useEffect, useState, useReducer } from 'react';
import './App.css';
import CountUp from 'react-countup';
import { contributionsModal } from './modal/ModalInfo.js';
import RewardProgressBar from './RewardProgressBar.js';
import RewardsTable from './RewardsTable.js';
import MoreInfo from './MoreInfo.js';

//
function calculateSuper(userInfo) {

    let superValue = 0;
    let yearsContributed = 1;
    let salary = userInfo.salary * 26;

    for (let i = userInfo.age; i < 65 ; i++) {

        if (yearsContributed > userInfo.frequency) {
            break;
        }

        superValue += userInfo.contribution;
        if (salary < 39838) {
            superValue += userInfo.contribution * 0.5;
        } else if (salary < 42838) {
            superValue += userInfo.contribution * 0.4;
        } else if (salary < 45838) {
            superValue += userInfo.contribution * 0.3;
        } else if (salary < 51838) {
            superValue += userInfo.contribution * 0.2;
        } else if (salary < 54838) {
            superValue += userInfo.contribution * 0.1;
        }

        superValue *= 1.035;
        superValue = Math.round(superValue);
        yearsContributed++;
    }

    return superValue;
}

function OneOffSummary(props) {

    let superValue = calculateSuper(props.userInfo);

    return(
        <div className="output">

            {/*contributionsModal*/}

            <div className="container" style={{color:"#e5007e", marginTop: "3vh"}}>
                <div className="row">
                    <div className="col" style={{fontSize: "60px", marginBottom:"5vh", marginTop: "5vh"}}>
                      Your Super Increased By An Additional<br/>
                       <CountUp style={{color:"black"}} start={0} end={100} duration={3} decimal={","} prefix={"$"}/>
                    </div>
                </div>

                <RewardsTable superValue={superValue}/>
                <RewardProgressBar superValue={superValue}/>
                <MoreInfo superValue={superValue} contribution={0} />

            </div>

        </div>
    );
};


export default OneOffSummary;
