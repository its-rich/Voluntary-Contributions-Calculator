import React, { useState } from 'react';
import Modal from './modal/Modal.js';
import { comfortItemExplained, netflixExplained, extraYearsExplained } from './modal/ModalInfo.js';

function GetReward(superValue) {

    let rewardTiers = [250, 500, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 150000];
    let tier = 250;

    for (let i = 0; i < rewardTiers; i++) {
        if (superValue < rewardTiers) {
            break;
        }
        tier = rewardTiers[i];
    }

    const rewardsHashTable =
    {
        250: {
            reward1: {
                icon: "comfort",
                picture: "directions_car",
                text: "You Could Attend More Concerts!"
            },
            reward2: {
                icon: "theaters",
                picture: 2,
                text: `You Could Enjoy Netflix Premium For An Additional ${Math.round(superValue/20)} Months!`
            }
        },
        500: {
            reward1: {
                icon: "comfort",
                picture: "shopping_bag",
                text: "You Could Buy Some New Clothes/Jerseys!"
            },
            reward2: {
                icon: "theaters",
                picture: 2,
                text: `You Could Enjoy Netflix Premium For An Additional ${Math.round(superValue/20)} Months!`
            }
        },
        1000: {
            reward1: {
                icon: "comfort",
                picture: "flight_takeoff",
                text: "You Could Enjoy A Vacation In South East Asia!"
            },
            reward2: {
                icon: "theaters",
                picture: 2,
                text: `You Could Enjoy Netflix Premium For An Additional ${Math.round(superValue/20)} Months!`
            }
        },
        5000: {
            reward1: {
                icon: "comfort",
                picture: "explore",
                text: "You Could Drive Around The Coast Of Australia!"
            },
            reward2: {
                icon: "theaters",
                picture: 2,
                text: `You Could Enjoy Netflix Premium For An Additional ${Math.round(superValue/20)} Months!`
            }
        },
        10000: {
            reward1: {
                icon: "comfort",
                picture: "directions_boat",
                text: `You Could Enjoy A Full Vacation Cruise ${Math.round(superValue/2000)} Times!`
            },
            reward2: {
                icon: "comfort",
                picture: "groups",
                text: "You Could Regularly Enjoy Leisure Activities!"
            }
        },
        25000: {
            reward1: {
                icon: "comfort",
                picture: "flight_takeoff",
                text: "You Could Enjoy Vacations Overseas To Fiji Or The US"
            },
            reward2: {
                icon: "business",
                picture: "business",
                text: "You Could Start Your Own Business!"
            }
        },
        50000: {
            reward1: {
                icon: "comfort",
                picture: "directions_car",
                text: "You Could Enjoy A New Ute!"
            },
            reward2: {
                icon: "debt",
                picture: 2,
                text: "You Could Pay Off Remaining Debts!"
            }
        },
        75000: {
            reward1: {
                icon: "comfort",
                picture: "airport_shuttle",
                text: "You Could Travel Around Australia In A Caravan!"
            },
            reward2: {
                icon: "debt",
                picture: 2,
                text: "You Could Pay Off Remaining Debts!"
            }
        },
        100000: {
            reward1: {
                icon: "comfort",
                picture: "home",
                text: "You Could Refurbish Your Home!"
            },
            reward2: {
                icon: "longevity",
                picture: "update",
                text: `You Could Enjoy An Extra ${Math.round(superValue/28000)} Modest Years In Retirement!`
            }
        },
        150000: {
            reward1: {
                icon: "comfort",
                picture: "sports_football",
                text: `You Could Watch The AFL Grand Final In The Corporate Box For ${Math.round(superValue/35000)} Years!`
            },
            reward2: {
                icon: "longevity",
                picture: "update",
                text: `You Could Enjoy An Extra ${Math.round(superValue/28000)} Modest Years In Retirement!`
            }
        }
    }


    return rewardsHashTable[tier];
}


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
                        <tr>
                            <th colSpan="3">{props.title}</th>
                        </tr>
                    </thead>

                    <tbody>

                        {totalRewards.map((num) => {
                            let key = "reward" + num;
                            return (
                                <tr>
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
