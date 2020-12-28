import React, { useEffect, useState, useReducer } from 'react';
import Modal from './modal/Modal.js';

function GetReward(bracket, superValue) {

    const rewardsHashTable =
    {
        250: {
            reward1: {
                picture: "directions_car",
                text: "You Could Attend More Concerts!"
            },
            reward2: {
                picture: "",
                text: `You Could Enjoy Netflix Premium For An Additional ${Math.round(superValue/20)} Months!`
            }
        }
    }


    return rewardsHashTable[bracket];
}


// I thought about integrating a database such that it would pull rewards based on
// what was specified in the database, but again as this website is just a proof
// of concept, I felt it would be unnecessary
function RewardsTable(props) {

    // What An Extra ${props.superValue} In Retirement, Means For You:

    let rewards = GetReward(250, props.superValue);
    let totalRewards = [1,2];

    const [showComfortInfo, setShowComfortInfo] = useState(false);
    const comfortItemExplained = "The Comfort Item is how much your voluntary contributions are worth at retirement, if it was a physical item.";

    return (
        <div>
            <Modal title="Comfort Item" text={comfortItemExplained} show={showComfortInfo} />
            <table className="table table-hover" style={{maxWidth: "100%", width:"auto",margin: "3vw"}}>
                <thead>
                    <tr>
                        <th colSpan="3">{props.title}</th>
                    </tr>
                </thead>

                <tbody>

                    {totalRewards.map((num) => {
                        let key = "reward" + num;
                        return (
                            <tr>
                                <th scope="row">
                                    <span
                                        className="material-icons md-48"
                                        style={{fontSize: "40px", color:"#b82885"}}
                                        onClick={() => setShowComfortInfo(!showComfortInfo)}>
                                    self_improvement
                                    </span>
                                    <br/>Comfort Item
                                </th>

                                <td>{rewards[key].text}</td>
                                <td><span className="material-icons md-48" style={{fontSize: "60px", color:"#b82885"}}>{rewards[key].picture}</span></td>
                            </tr>);
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default RewardsTable;
