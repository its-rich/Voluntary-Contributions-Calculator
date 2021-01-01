import React, { useState } from 'react';
import '../App.css';
import CountUp from 'react-countup';
import { contributionsModal } from '../modal/ModalInfo.js';
import RewardProgressBar from '../rewards/RewardProgressBar.js';
import RewardsTable from '../rewards/RewardsTable.js';
import MoreInfo from './MoreInfo.js';

// This will apply a user's voluntary contribution, compounding interest and any
// government co-contribution to their super and return the new increased value
// of their super
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

// To find how much a user's super value would increase from their voluntary contribution
// just find the difference from the previous value of their super
function FindSuperIncrease(superValues) {

    if (superValues.length === 1) {
        return superValues[0];
    }

    return superValues[superValues.length - 1] - superValues[superValues.length - 2];
}

// Returns a summary of the potential value of a user's super based upon their
// adjustments. It also allows a user to iterate forwards-backwards each year
// until they reach retirement
function YearlySummary(props) {

    let [currentAge, setCurrentAge] = useState(props.userInfo.age);
    let [superValues, setSuperValue] = useState([0, CompoundSuper(0, props.userInfo.salary, props.contributions[0].contribution)]);
    let currentYear = new Date().getFullYear() + currentAge - props.userInfo.age + 1;
    let [currSuperValue, setCurrSuperValue] = useState(superValues[superValues.length - 1]);
    let [stoppedContributing, setStoppedContributing] = useState(false);

    // This decreases the user's age, meaning they go back one year, displaying
    // their additional super value at that point of time
    function DecrementYear() {
        if (currentAge !== props.userInfo.age) {
            superValues.pop();
            setSuperValue(superValues);
            setCurrSuperValue(superValues[superValues.length - 1]);
            setCurrentAge((prevAge) => {
                return prevAge - 1;
            });

            setStoppedContributing(false);
        }
    }

    // This increases the user's age, meaning they go forward one year, displaying
    // their additional super value at that point of time
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

            setStoppedContributing(false);
        }
    }

    // If a user does not want to make any more contributions until they retire
    // they click on "I'm Done Contributing" button calling this function
    // Thus this will just compound their superValue until they are 65 years old
    function FinishContributing() {

        let lastSuperValue = superValues[superValues.length - 1];
        stoppedContributing = lastSuperValue;

        for (let i = currentAge; i <= 65 ; i++) {
            lastSuperValue *= 1.035;
            lastSuperValue = Math.round(lastSuperValue);
            superValues.push(lastSuperValue);
        }

        setCurrSuperValue(lastSuperValue);
        setSuperValue(superValues);
        setCurrentAge(65);
        stoppedContributing -= lastSuperValue;
        setStoppedContributing(Math.abs(stoppedContributing));
    }

    return(
        <div className="output">

            {contributionsModal}

            <div className="container" style={{color:"#e5007e", marginTop: "3vh"}}>

                {/*
                    When the user clicks the "I'm Done Contributing" button
                    display how much their super has increased since then
                */}
                {Number.isInteger(stoppedContributing) && <div className="row">
                    <div className="col" style={{fontSize: "60px", marginBottom:"5vh", marginTop: "5vh"}}>
                      Compared To Your Super When You Last Contributed, Your Super Increased By<br/>
                       <CountUp style={{color:"black"}} start={0} end={stoppedContributing} duration={3} decimal={","} prefix={"$"}/>
                    </div>
                </div>}
                {!Number.isInteger(stoppedContributing) && <div className="row">
                    <div className="col" style={{fontSize: "60px", marginBottom:"5vh", marginTop: "5vh"}}>
                      Compared To Last Year, Your Super Increased By<br/>
                       <CountUp style={{color:"black"}} start={0} end={FindSuperIncrease(superValues)} duration={3} decimal={","} prefix={"$"}/>
                    </div>
                </div>}

                {currentAge !== 65 && <RewardsTable superValue={currSuperValue}
                    title={`In ${currentYear}, Your Super Has Increased By An Additional $${currSuperValue}, Which So Far In Retirement Looks Like:`}/>}
                {currentAge === 65 && <RewardsTable superValue={currSuperValue}
                    title={`At Retirement in ${currentYear}, Your Super Has Increased By An Additional $${currSuperValue}, Which Looks Like:`}/>}

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
