
// This function will check if the user is eligible to receive government co-contributions
// based on their current estimated annual salary. It will then return information
// explaining this to the user if they are eligible, otherwise false
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
        <a href="https://aware.com.au/member/superannuation-and-insurance/contributions/government-co-contributions" target="_blank">
        Aware Super
        </a>;

    if (isElgibile) {
        return (
            <p>Since your annual salary is under ${bracket}, the government will also contribute {percentage}% of every dollar
             that you voluntary contribute to your super as well. This means you could get an extra ${percentage}0 each year
             for free! We will add this into our calculations<br/><br/>To see if
             if you're eligible, check out {awareSuperLink}
            </p>
        );
    }

    return isElgibile;
}

export const assumptionsMade =
    <div>
        We assumed that your fornightly income remained stable across your entire working career.<br/><br/>
        We assumed your voluntary contributions were made post-tax.<br/><br/>
        We also assumed that you would retire when you reach 65 years old.<br/><br/>
        We assumed you had no money in your Superannuation and the interest rate was held constant at 3.5% period.<br/><br/>
        This is the exact formula we used to calculate how much your Superannuation increased by each year:<br/><br/>
        Super = (Current Super Balance + Voluntary Contribution) x 1.035%<br/><br/>
        Note, if you were eligible for a government Super Co-Contribution, then this was automatically added to your Voluntary Contribution.
    </div>
