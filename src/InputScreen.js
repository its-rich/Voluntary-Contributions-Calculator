import React, { useEffect, useState, useReducer } from 'react';
import './App.css';
import Modal from './Modal.js';

const ACTIONS = {
    PUSH: 'push-contribution',
    ADD: 'add-contribution'
}

//
function GovContribution(salary) {
    if (salary < 39838) {
        return 50;
    } else if (salary < 42838) {
        return 40;
    } else if (salary < 45838) {
        return 30;
    } else if (salary < 51838) {
        return 20;
    } else if (salary < 54838) {
        return 10;
    }
    return -1;
}

function reducer(contributions, action) {
    if (action.type === ACTIONS.PUSH) {
        return [...contributions, { contribution: action.payload.contribution }];
    } else if (action.type === ACTIONS.ADD) {
        return [{ contribution: action.payload.contribution }];
    } else {
        return contributions;
    }
}

//
function InputScreen(props) {

    const [contribution, dispatch] = useReducer(reducer, []);
    const [userInfo, setInfo] = useState({
        age: 0,
        salary: 0,
        frequency: 0,
        isYearly: null
    });

    // Create an array of valid ages before retirement
    const ages = [];
    for (let i = 18; i < 65; i++) {
        ages.push(i);
    }

    // Create an array of valid years until retirement
    const duration = [];
    for (let i = 1; i <= (65 - 18); i++) {
        duration.push(i);
    }

    function setAge(age) {
        setInfo((prevInfo) => {
            return { ...prevInfo, age: age }
        });
    }

    function setSalary(salary) {
        setInfo((prevInfo) => {
            return { ...prevInfo, salary: salary };
        });
    }

    const isValidSalary = userInfo.salary >= 0 && userInfo.salary !== '';

    function setFrequency(frequency) {
        setInfo((prevInfo) => {
            return { ...prevInfo, frequency: frequency };
        });
    }

    function setYearly(bool) {
        setInfo((prevInfo) => {
            return { ...prevInfo, isYearly: bool };
        });
    }

    // <p>Since your annual salary is under $39,838, the government will also contribute 50% of every dollar
    // that you voluntary contribute to your super as well. This means you could get an extra $500 each year for free! We will add this into our calculations<br/><br/>To see if
    // if you're eligible, check out <a href="https://aware.com.au/member/superannuation-and-insurance/contributions/government-co-contributions" target="_blank">
    // Aware Super</a></p>

    let govContribution = 'd';

    if (props.pageNum === 2) {
        return (
            <div className="input" style={{animation:"fadein 3s linear"}}>

                <div className="selectAge">
                    <h2 style={{color:"#e5007e"}}>Please Select Your Age
                        <span className="material-icons md-48" style={{verticalAlign: "-10px", fontSize:"40px"}}>person_search</span>
                    </h2>
                    <select className="form-control" style={{maxWidth:"fit-content", marginLeft:"47vw"}} onChange={(e) => setAge(e.target.value)}>
                        {ages.map((item) => {
                            return (
                                <option key={item}>{item}</option>
                            );
                        })}
                    </select>
                </div>

                <div className="selectSalary">
                    <h2 style={{color:"#e5007e"}}>Please Enter How Much You Earn In 2 Weeks (Average)
                        <span className="material-icons md-48" style={{verticalAlign: "-10px", fontSize:"40px"}}>attach_money</span>
                    </h2>
                    {!isValidSalary && <h2 style={{color:"red"}}>If you earn nothing, just put $0</h2>}
                    <input type="number" value={userInfo.salary} onChange={(e) => setSalary(e.target.value)}></input>
                </div>

                <div>
                    <h2 style={{color:"#e5007e"}}>Please Select What You Will Start Doing Today
                        <span className="material-icons md-48" style={{verticalAlign: "-10px", fontSize:"40px"}}>account_balance_wallet</span>
                    </h2>
                    <div className="move">
                        <select
                            className="form-control"
                            style={{maxWidth:"fit-content", marginLeft: "7vmax"}}
                            onChange={(e) => dispatch({ type: ACTIONS.ADD, payload: { contribution: e.target.value } })}
                        >
                            <option value="100">Take shorter showers</option>
                            <option value="200">Drink 1 less coffee</option>
                            <option value="300">Stop ordering food delivery</option>
                            <option value="400">Stop eating confectionaries</option>
                            <option value="500">Smoke 1 less packet of cigarettes</option>
                            <option value="600">Spend less nights out at the bar</option>
                            <option value="700">BYO water bottle everywhere</option>
                            <option value="800">Don't bet on anything for a year</option>
                            <option value="900">Only take public transport to work</option>
                            <option value="1000">Eat out out less</option>
                        </select>
                    </div>
                </div>

                <h2 style={{color:"#e5007e"}}>Would You Like To Adjust Your Contributions For Each Year?</h2>
                <div className="container" style={{color:"#e5007e", marginTop: "3vh"}}>
                    <div className="row">
                        <div className="col">
                            <div className="yesButton">
                                <button className="btn btn-lg btn-dark" style={{height:"65px", width: "200px"}} onClick={() => setYearly(true)}>
                                    <span>Yes</span>
                                    <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>
                                    check_circle
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <button className="btn btn-lg btn-dark" style={{height:"65px", width: "200px"}} onClick={() => setYearly(false)}>
                                <span>No</span>
                                <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>
                                clear
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {userInfo.isYearly === false && <div className="selectAge">
                    <h2 style={{color:"#e5007e"}}>Please Select How Long You Would Like To Reinvest Your Savings For
                    <span className="material-icons md-48" style={{verticalAlign: "-10px", fontSize:"40px"}}>account_balance</span>
                    </h2>
                    <select className="form-control" style={{maxWidth:"fit-content", marginLeft:"47vw"}} >
                        {duration.map((item) => {
                            const isValidYear = (parseInt(item) + parseInt(userInfo.age)) <= 65;
                            if (isValidYear) {
                                return (
                                    <option key={item}>{item}</option>
                                );
                            }
                        })}
                    </select>
                </div>}

                {userInfo.isYearly !== null && <div className="button" style={{marginTop: "6vh"}}>
                    {userInfo.isYearly === false && <h3 style={{color:"black", fontWeight:"300"}}>
                    We Will Now Calculate How Much Your Super Could Increase By,<br/>From Just Voluntary Contributions Over {userInfo.frequency} Years
                    </h3>}
                    {userInfo.isYearly && <h3 style={{color:"black", fontWeight:"300"}}>
                    You Will Now Be Able to Calculate How Much<br/>Your Super Could Increase By, Until Retirement
                    </h3>}
                    {!isValidSalary && <button className="btn btn-lg btn-dark" style={{height:"65px", width: "200px"}} disabled>
                        <span>Calculate</span>
                        <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>
                        calculate
                        </span>
                    </button>}
                    {isValidSalary && <button className="btn btn-lg btn-dark" style={{height:"65px", width: "200px"}}>
                        <span>Calculate</span>
                        <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>
                        calculate
                        </span>
                    </button>}
                </div>}

            </div>
        );
    } else {
        return null;
    }

};

export default InputScreen;
