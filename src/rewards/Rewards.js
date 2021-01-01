// This contains all possible rewards that a user could enjoy at retirement
// based upon their additional super value.
// The JSON object could have been separated on its own and have a key word which
// will be replaced with the appropriate code, but I felt it was unnecessary for
// this exercise
export function GetReward(superValue) {

    let rewardTiers = [250, 500, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 150000];
    let tier = 250;

    for (let i = 0; i < rewardTiers; i++) {
        if (superValue < rewardTiers) {
            break;
        }
        tier = rewardTiers[i];
    }

    // At any given time only 2 rewards will be shown, hence there are only 2
    // reward records.
    // -- An icon represents what kind of reward it is, as specific rewards have
    // a unique explanation.
    // -- A "picture" is to help the user visualise the reward
    // -- The text just contains text explaining what the reward is
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
