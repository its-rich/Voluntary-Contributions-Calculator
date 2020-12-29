import Modal from './Modal.js';

// This function will check if the user is eligible to receive government co-contributions
// based on their current estimated annual salary. It will then return a modal if
// and only if they are eligible
export function DoesGovContribute(salary) {
    let isElgibile = false;
    let bracket = 0;
    let percentage = 0;

    if (salary < 39838) {
        bracket = "39,838";
        percentage = 50;
        isElgibile = true;
    } else if (salary < 42838) {
        bracket = "42,838";
        percentage = 40;
        isElgibile = true;
    } else if (salary < 45838) {
        bracket = "45,838";
        percentage = 30;
        isElgibile = true;
    } else if (salary < 51838) {
        bracket = "51,838";
        percentage = 20;
        isElgibile = true;
    } else if (salary < 54838) {
        bracket = "54,838";
        percentage = 10;
        isElgibile = true;
    }

    const awareSuperLink =
        <a href="https://aware.com.au/member/superannuation-and-insurance/contributions/government-co-contributions" target="_blank" rel="noreferrer">
        Aware Super
        </a>;

    if (isElgibile) {

        let text =
            <p>Since your annual salary is under ${bracket}, the government will also contribute {percentage}% of every dollar
             that you voluntary contribute to your super as well. This means you could get an extra ${percentage}0 each year
             for free! We will add this into our calculations<br/><br/>To see if
             if you're eligible, check out {awareSuperLink}
            </p>;

        return <Modal title="Did You Know?" text={text} show={isElgibile}/>;
    }

    return null;
}

// This modal explains all of the assumptions used when calculating the impact of
// their voluntary contributions on their super
const assumptionsMade =
    <div>
        We assumed that your fornightly income remained stable across your entire working career.<br/><br/>
        We assumed your voluntary contributions were made post-tax.<br/><br/>
        We also assumed that you would retire when you reach 65 years old.<br/><br/>
        We assumed you had no money in your Superannuation and the interest rate was held constant at 3.5% period.<br/><br/>
        This is the exact formula we used to calculate how much your Superannuation increased by each year:<br/><br/>
        Super = (Current Super Balance + Voluntary Contribution) x 1.035%<br/><br/>
        Note, if you were eligible for a government Super Co-Contribution, then this was automatically added to your Voluntary Contribution.
    </div>

export const assumptionsModal = <Modal title="How We Calculated Everything" text={assumptionsMade} info={true}/>;

// This modal explains what the real monetary value of the sacrifices/commitments are
const contributionsExplained =
    <div>
        The sacrifice that you started to do today, we assumed you would do within a year and that you would save its monetary value into your Super.
        The dollar value of each of these sacrifices are listed below:<br/><br/>
        You would take shorter showers for a year (Worth $100)<br/>
        You would drink 1 less coffee each week for a year (Worth $200)<br/>
        You would stop ordering food delivery for a year (Worth $300)<br/>
        You would stop eating confectionaries for a year (Worth $400)<br/>
        You would smoke 1 less packet of cigarettes a month for a year (Worth $500)<br/>
        You would spend less nights out at the bar for a year (Worth $600)<br/>
        You would BYO water bottle everywhere, so you wouldn't need to buy drinks (Worth $700)<br/>
        You wouldn't bet on anything for a year (Worth $800)<br/>
        You would only take public transport to work for a year (Worth $900)<br/>
        You would eat out less, once a week for a year (Worth $1000)<br/><br/>
        Note, the real value of your retirement savings may not end up being equal to the same value in this simulation,
         as the calculations were simplified. Similarly your retirement savings may not end up being worth these things in the future
    </div>

export const contributionsModal = <Modal title="How Much Did I Voluntarily Contribute?" text={contributionsExplained} info={true}/>;

// This is meant to replicate a form that a user might fill when they make a voluntary contribution
export function contributionsInfo(contribution) {

    return (
        <div>
            To reach your reward, you will need to contribute ${(contribution/26).toFixed(2)} after tax, for every 2 weeks each year
            <br/><br/>
            Bank Details<br/><br/>
            <input type="text" placeholder="Name"></input><br/><br/>
            <input type="text" placeholder="BSB"></input><br/><br/>
            <input type="text" placeholder="Account Number"></input><br/><br/>
            <button type="button" className="btn btn-success">Confirm</button>
        </div>);
}

// This information is used to explain details about items in the rewards table
export const comfortItemExplained = "The Comfort Item is how much your voluntary contributions are worth at retirement, if it was a physical item.";
export const netflixExplained = "A Netflix Premium Plan costs $20 per month, and this demonstrates how many extra months you could enjoy this plan in retirement if you voluntarily contribute to your Super.";
export const extraYearsExplained =
    <div>
        How Long It Will Last indicates how many more years you could live modestly in retirement if you voluntarily contribute to your Super.
        <br/><br/>
        This value is based upon <a target="_blank" href="https://www.superannuation.asn.au/resources/retirement-standard" rel="noreferrer">ASFA's Retirement Standard</a>
    </div>;
