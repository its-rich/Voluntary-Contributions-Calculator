import React, { useState } from 'react';
import './App.css';
import CountUp from 'react-countup';
import { contributionsModal } from './modal/ModalInfo.js';
import RewardProgressBar from './RewardProgressBar.js';
import RewardsTable from './RewardsTable.js';
import MoreInfo from './MoreInfo.js';

function CompoundSuper(superValue, salary, contribution) {

    superValue += contribution;

    if (salary < 39838) {
        superValue += contribution * 0.5;
    } else if (salary < 42838) {
        superValue += contribution * 0.4;
    } else if (salary < 45838) {
        superValue += contribution * 0.3;
    } else if (salary < 51838) {
        superValue += contribution * 0.2;
    } else if (salary < 54838) {
        superValue += contribution * 0.1;
    }

    superValue *= 1.035;
    superValue = Math.round(superValue);

    return superValue;
}

function FindSuperIncrease(superValues) {

    let prev = 0;
    let curr = 0;

    for (let i = 0; i < superValues.length; i++) {
        prev = curr;
        curr = superValues[i];
    }

    return curr - prev;
}

function YearlySummary(props) {

    let [currentAge, setCurrentAge] = useState(props.userInfo.age);
    let [superValues, setSuperValue] = useState([0, CompoundSuper(0, props.userInfo.salary, props.contributions[0].contribution)]);
    let currentYear = new Date().getFullYear() + currentAge - props.userInfo.age + 1;
    let [currSuperValue, setCurrSuperValue] = useState(superValues[superValues.length - 1]);

    function DecrementYear() {
        if (currentAge !== props.userInfo.age) {
            superValues.pop();
            setSuperValue(superValues);
            setCurrSuperValue(superValues[superValues.length - 1]);
            setCurrentAge((prevAge) => {
                return prevAge - 1;
            });
        }
    }

    function IncrementYear(didContribute) {
        if (currentAge !== 65) {

            if (didContribute) {
                let contribution = props.contributions[props.contributions.length - 1].contribution;
                let newSuperValue = CompoundSuper(superValues[superValues.length - 1], props.userInfo.salary, contribution);
                superValues.push(newSuperValue);
                setCurrSuperValue(newSuperValue);
                setSuperValue(superValues);
            } else {
                let newSuperValue = superValues[superValues.length - 1];
                newSuperValue = Math.round(newSuperValue * 1.035);
                setCurrSuperValue(newSuperValue);
                superValues.push(newSuperValue);
                setSuperValue(superValues);
            }

            setCurrentAge((prevAge) => {
                return prevAge + 1;
            });
        }
    }

    function FinishContributing() {

        let lastSuperValue = superValues[superValues.length - 1];

        for (let i = currentAge; i <= 65 ; i++) {
            lastSuperValue *= 1.035;
            lastSuperValue = Math.round(lastSuperValue);
            superValues.push(lastSuperValue);
        }

        setCurrSuperValue(lastSuperValue);
        setSuperValue(superValues);
        setCurrentAge(65);
    }

    // TODO
    // display certain text when at retirement
    // display certain text when i'm done contributing
    return(
        <div className="output">

            {/*contributionsModal*/}

            <div className="container" style={{color:"#e5007e", marginTop: "3vh"}}>
                <div className="row">
                    <div className="col" style={{fontSize: "60px", marginBottom:"5vh", marginTop: "5vh"}}>
                      Compared To Last Year, Your Super Increased By<br/>
                       <CountUp style={{color:"black"}} start={0} end={FindSuperIncrease(superValues)} duration={3} decimal={","} prefix={"$"}/>
                    </div>
                </div>

                <RewardsTable superValue={currSuperValue}
                    title={`In ${currentYear}, Your Super Has Increased By An Additional $${currSuperValue}, Which So Far In Retirement Looks Like:`}/>

                <div style={{marginBottom: "5vh"}}>
                    <RewardProgressBar superValue={currSuperValue}/>
                </div>

                <div className="row" style={{marginBottom: "3vh"}}>
                    <div className="col">
                        <button className="btn btn-lg btn-dark" style={{height:"65px", width: "250px"}} onClick={() => DecrementYear()}>
                            <span>Previous Year</span>
                            <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>west</span>
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-lg btn-dark" style={{height:"65px", width: "250px"}} onClick={() => FinishContributing()}>
                            <span>I'm Done Contributing</span>
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-lg btn-dark" style={{height:"70px", width: "250px"}} onClick={() => IncrementYear(false)}>
                            <span>No Contributions This Year</span>
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-lg btn-dark" style={{height:"65px", width: "250px"}} onClick={() => IncrementYear(true)}>
                            <span>Next Year</span>
                            <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>east</span>
                        </button>
                    </div>
                </div>

                <MoreInfo superValue={currSuperValue} contribution={props.contribution} />

            </div>

        </div>
    );

}

export default YearlySummary;
