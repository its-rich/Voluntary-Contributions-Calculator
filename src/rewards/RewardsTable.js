import React, { useState } from 'react';
import Modal from '../modal/Modal.js';
import { GetReward } from './Rewards.js';
import { comfortItemExplained, netflixExplained, extraYearsExplained } from '../modal/ModalInfo.js';

// I thought about integrating a database such that it would pull rewards based on
// what was specified in the database, but again as this website is just a proof
// of concept, I felt it would be unnecessary
function RewardsTable(props) {

    let rewards = GetReward(props.superValue);
    let totalRewards = [1,2];

    const [showComfortInfo, setShowComfortInfo] = useState(false);
    const [showNetflixInfo, setShowNetflixInfo] = useState(false);
    const [showExtraYears,  setShowExtraYears]  = useState(false);

    function CreateRow(icon) {
        if (icon === "comfort") {
            return (
                <th scope="row">
                    <span
                        className="material-icons md-48"
                        style={{fontSize: "40px", color:"#b82885"}}
                        onClick={() => setShowComfortInfo(!showComfortInfo)}>
                    self_improvement
                    </span>
                    <br/>Comfort Item
                </th>);
        } else if (icon === "theaters") {
            return (
                <th scope="row">
                    <span
                        className="material-icons md-48"
                        style={{fontSize: "40px", color:"#b82885"}}
                        onClick={() => setShowNetflixInfo(!showNetflixInfo)}>
                    theaters
                    </span>
                    <br/>Netflix Premium Plan
                </th>);
        } else if (icon === "business") {
            return (
                <th scope="row">
                    <span className="material-icons md-48" style={{fontSize: "40px", color:"#b82885"}}>
                        accessibility_new
                    </span>
                    <br/>Business Owner
                </th>);
        } else if (icon === "debt") {
            return (
                <th scope="row">
                    <span className="material-icons md-48" style={{fontSize: "40px", color:"#b82885"}}>
                        credit_card
                        </span>
                        <br/>Manage Your Debt
                </th>);
        } else if (icon === "longevity") {
            return (
                <th scope="row">
                    <span
                        className="material-icons md-48"
                        style={{fontSize: "40px", color:"#b82885"}}
                        onClick={() => setShowExtraYears(!showExtraYears)}>
                    account_balance
                    </span>
                    <br/>How Long It Will Last
                </th>);
        }
    }

    return (
        <div>
            <Modal title="Comfort Item" text={comfortItemExplained} show={showComfortInfo} />
            <Modal title="Netflix Premium Plan" text={netflixExplained} show={showNetflixInfo} />
            <Modal title="How Long It Will Last" text={extraYearsExplained} show={showExtraYears} />

            {/*
                This extra div ensures the width expands longer
            */}
            <div style={{ display:"grid", color: "black"}}>
                <table className="table table-hover" style={{maxWidth: "100%", width:"auto",margin: "3vw"}}>
                    <thead>
                        <tr key="title" >
                            <th colSpan="3">{props.title}</th>
                        </tr>
                    </thead>

                    <tbody>

                        {totalRewards.map((num) => {
                            let key = "reward" + num;
                            return (
                                <tr key={rewards[key].icon}>
                                    {CreateRow(rewards[key].icon)}

                                    {Number.isInteger(rewards[key].picture) && <td colSpan={String(rewards[key].picture)}>{rewards[key].text}</td>}
                                    {!Number.isInteger(rewards[key].picture) && <td colSpan={String(rewards[key].picture)}>{rewards[key].text}</td>}
                                    {!Number.isInteger(rewards[key].picture) && <td>
                                        <span className="material-icons md-48" style={{fontSize: "60px", color:"#b82885"}}>{rewards[key].picture}</span>
                                    </td>}
                                </tr>);
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RewardsTable;
