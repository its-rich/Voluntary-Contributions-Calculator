import React from 'react';
import '../App.css';
import CountUp from 'react-countup';
import { contributionsModal } from '../modal/ModalInfo.js';
import RewardProgressBar from '../rewards/RewardProgressBar.js';
import RewardsTable from '../rewards/RewardsTable.js';
import MoreInfo from './MoreInfo.js';

// Calculate the impact of a user's voluntary contributions based on their salary
// and how many years they will contribute. This will return a compounded value
// based purely on these metrics
function calculateSuper(userInfo, contribution) {

    let superValue = 0;
    let yearsContributed = 1;
    let salary = userInfo.salary * 26;
    contribution = Number.parseInt(contribution);

    for (let i = userInfo.age; i < 65 ; i++) {

        if (yearsContributed > userInfo.frequency) {
            break;
        }

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
        yearsContributed++;
    }
    superValue = Math.round(superValue);

    return superValue;
}

// Returns a summary of the impact on a user's super based purely upon their
// voluntary contribution and how many years they contributed for
// (includes government co-contribution if applicable)
function OneOffSummary(props) {

    let superValue = calculateSuper(props.userInfo, props.contribution);

    return(
        <div className="output">

            {contributionsModal}

            <div className="container" style={{color:"#e5007e", marginTop: "3vh"}}>
                <div className="row">
                    <div className="col" style={{fontSize: "60px", marginBottom:"5vh", marginTop: "5vh"}}>
                      Your Super Increased By An Additional<br/>
                       <CountUp style={{color:"black"}} start={0} end={superValue} duration={3} decimal={","} prefix={"$"}/>
                    </div>
                </div>

                <RewardsTable superValue={superValue} title={`What An Extra $${superValue} In Retirement, Means For You:`}/>
                <RewardProgressBar superValue={superValue}/>
                <MoreInfo superValue={superValue} contribution={props.contribution} />

            </div>

        </div>
    );
};

export default OneOffSummary;
