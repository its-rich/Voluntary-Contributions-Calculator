import React from 'react';
import '../App.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

// Based on one's super value, return what percentage of rewards they can enjoy
// The rewards that they can enjoy are outlined by rewardTiers array, where each
// index represents each bracket of different rewards and each value at that
// index represents the minimum super value needed to enjoy that reward
function CalculatePercentage(superValue) {
    let rewardTiers = [250, 500, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 150000];
    let percent = 0;

    let i = 0;

    for (i = 0; i < rewardTiers.length; i++) {
        if (superValue < rewardTiers[i]) {
            break;
        }
        percent += 10;
    }

    // If they have achieved all goals then return 100%
    if (i === rewardTiers.length) {
        return 100;
    }

    percent += (superValue/rewardTiers[i]) * 10;

    // If the individual's super value is 0, then just return 1%
    if (percent === 0) {
        return 1;
    }

    return percent;
};

// Returns a progress bar with images of a reward at each reward tier and these
// images will be coloured in if and only if the user's super has reached that
// target
function RewardProgressBar(props) {

    let rewards = ['theaters', 'sports_football', 'shopping_bag', ' flight_takeoff', 'explore',
        'directions_boat', 'business', 'directions_car', 'airport_shuttle', 'home', 'update'];

    let percentage = CalculatePercentage(props.superValue)

    return (
        <ProgressBar
            percent={percentage}
            filledBackground="linear-gradient(to right, #a4dfcc, #4BB543)"
        >
            {rewards.map((item) => {
                return (
                    <Step transition="scale">
                      {({ accomplished }) => (
                        <span className="material-icons" style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }} width="30">{item}</span>
                      )}
                    </Step>);
            })}
        </ProgressBar>
    );
};

export default RewardProgressBar;
