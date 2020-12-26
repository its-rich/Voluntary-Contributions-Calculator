import React, { useEffect, useState } from 'react';
import './App.css';
import IntroScreen from './IntroScreen.js';
import StartScreen from './StartScreen.js';
import InputScreen from './InputScreen.js';
// import Results from './Results.js';
// import Yearly from './Yearly.js';

function App() {

    // Used to track which page number that the user is on
    const [pageNum, setPageNum] = useState(0);

    // Increment the page number to switch to the appropriate screen
    function IncrementPage() {
        setPageNum((prevPage) => prevPage + 1);
    }

    useEffect(() => {

        // Ensure that the intro screen only plays for 4 seconds
        if (pageNum === 0) {
            setTimeout(
                () => IncrementPage(), 4000
            );
        }
    })

    return (
        <div className="App">
            <IntroScreen pageNum={pageNum}/>
            <StartScreen pageNum={pageNum} IncrementPage={() => IncrementPage()}/>
            <InputScreen pageNum={pageNum}/>
        </div>
    );
};

// class App extends React.Component {
//
//     constructor(props) {
//         super();
//
//         let arr = [];
//         for (let i = 18; i < 65; i++) {
//             arr.push(i);
//         }
//
//         let years = [];
//         let x = 1;
//         for (let i = 18; i < 65; i++) {
//             years.push(x);
//             x++;
//         }
//
//         this.state = {
//             pageNum: 0,
//             age: 18,
//             ages: arr,
//             salary: 0,
//             contribution: 100,
//             years: years,
//             freq: 1,
//             redoC: false,
//             show1: false,
//             calculate: false,
//             info: true,
//             assumptions: false,
//             redo: 0,
//             negative: false,
//             yearly: null
//         }
//     }
//
//     componentDidMount() {
//         setTimeout(
//             () => this.setState({pageNum: 1}), 4000
//         );
//     }
//
//     nextPage() {
//         this.setState({pageNum: this.state.pageNum + 1});
//     }
//
//     setAge = (e) => {
//         this.setState({age: e.target.value});
//     }
//
//     setSalary = (e) => {
//         if (parseInt(e.target.value) < 0) {
//             this.setState({negative: true});
//         } else {
//             this.setState({salary: parseInt(e.target.value)});
//             this.setState({negative: false});
//         }
//     }
//
//     setCon = (e) => {
//         this.setState({contribution: parseInt(e.target.value)});
//     }
//
//     setFreq = (e) => {
//         let f = e.target.value.split(" ")[0]
//         this.setState({freq: parseInt(f)});
//     }
//
//     setYearly = (value) => {
//         this.setState({yearly: value});
//     }
//
//
//     showInfo() {
//         if (this.state.show1) {
//             this.setState({show1: false});
//             this.setState({info: false});
//         } else  {
//             this.setState({show1: true});
//         }
//     }
//
//     assumptions() {
//         if (this.state.assumptions) {
//             this.setState({assumptions: false});
//         } else  {
//             this.setState({assumptions: true});
//         }
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.age !== this.state.age) {
//             let arr = [];
//             let x = 1;
//             for (let i = this.state.age; i < 65; i++) {
//                 arr.push(x);
//                 x++;
//             }
//             this.setState({years: arr});
//         }
//     }
//
//     tryNextPage() {
//
//         if (this.state.negative) {
//             return;
//         }
//
//         if (this.state.calculate) {
//             this.setState({redo: this.state.redo + 1})
//         }
//
//         if (this.state.freq < 0) {
//             this.setState({redoC: true});
//             return;
//         }
//
//         this.setState({redoC: false});
//         let annual = this.state.salary * 26;
//
//         if (annual < 54838 && this.state.info) {
//             this.setState({show1: true});
//             return;
//         }
//
//         this.setState({calculate: true});
//     }
//
//     render() {
//         return(
//             <div className="App">
//                 {this.state.pageNum==2 && <div className="input"style={{animation:"fadein 3s linear"}}>
//                     {this.state.show1 && <div className="modal" tabIndex="-1" role="dialog">
//                       <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                           <div className="modal-header">
//                             <h5 className="modal-title" style={{color:"black"}}>Did You Know?</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.showInfo()}>
//                               <span aria-hidden="true">&times;</span>
//                             </button>
//                           </div>
//                           <div className="modal-body" style={{color:"black"}}>
//                             {this.state.salary < 39838 && <p>Since your annual salary is under $39,838, the government will also contribute 50% of every dollar
//                             that you voluntary contribute to your super as well. This means you could get an extra $500 each year for free! We will add this into our calculations<br/><br/>To see if
//                             if you're eligible, check out <a href="https://aware.com.au/member/superannuation-and-insurance/contributions/government-co-contributions" target="_blank">
//                             Aware Super</a></p>}
//                             {39848 <= this.state.salary && this.state.salary < 42838 && <p>Since your annual salary is under $42,838, the government will also contribute 40% of every dollar
//                             that you voluntary contribute to your super as well. This means you could get an extra $400 each year for free! We will add this into our calculations<br/><br/>To see if
//                             if you're eligible, check out <a href="https://aware.com.au/member/superannuation-and-insurance/contributions/government-co-contributions" target="_blank">
//                             Aware Super</a></p>}
//                             {42838 <= this.state.salary && this.state.salary < 45838 && <p>Since your annual salary is under $45,838, the government will also contribute 30% of every dollar
//                             that you voluntary contribute to your super as well. This means you could get an extra $300 each year for free! We will add this into our calculations<br/><br/>To see if
//                             you're eligible, check out <a href="https://aware.com.au/member/superannuation-and-insurance/contributions/government-co-contributions" target="_blank">
//                             Aware Super</a></p>}
//                             {45838 <= this.state.salary && this.state.salary < 51838 && <p>Since your annual salary is under $51,838, the government will also contribute 20% of every dollar
//                             that you voluntary contribute to your super as well. This means you could get an extra $200 each year for free! We will add this into our calculations<br/><br/>To see if
//                             you're eligible, check out <a href="https://aware.com.au/member/superannuation-and-insurance/contributions/government-co-contributions" target="_blank">
//                             Aware Super</a></p>}
//                             {51838 <= this.state.salary && this.state.salary < 54838 && <p>Since your annual salary is under $54,838, the government will also contribute 10% of every dollar
//                             that you voluntary contribute to your super as well. This means you could get an extra $100 each year for free! We will add this into our calculations<br/><br/>To see if
//                             you're eligible, check out <a href="https://aware.com.au/member/superannuation-and-insurance/contributions/government-co-contributions" target="_blank">
//                             First Super</a></p>}
//                           </div>
//                         </div>
//                       </div>
//                     </div>}
//                     <div className="moreinfo">
//                     <span className="material-icons md-48" style={{fontSize: "40px", color:"#b82885"}} onClick={() => this.assumptions()}>info</span>
//                     </div>
//                     {this.state.assumptions && <div className="modal" tabIndex="-1" role="dialog">
//                       <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                           <div className="modal-header">
//                             <h5 className="modal-title" style={{color:"black"}}>How We Calculated Everything</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.assumptions()}>
//                               <span aria-hidden="true">&times;</span>
//                             </button>
//                           </div>
//                           <div className="modal-body" style={{color:"black"}}>
//                           We assumed that your fornightly income remained stable across your entire working career.<br/><br/>
//                           We assumed your voluntary contributions were made post-tax.<br/><br/>
//                           We also assumed that you would retire when you reach 65 years old.<br/><br/>
//                           We assumed you had no money in your Superannuation and the interest rate was held constant at 3.5% period.<br/><br/>
//                           This is the exact formula we used to calculate how much your Superannuation increased by each year:<br/><br/>
//                           Super = (Current Super Balance + Voluntary Contribution) x 1.035%<br/><br/>
//                           Note, if you were eligible for a government Super Co-Contribution, then this was automatically added to your Voluntary Contribution.
//                           </div>
//                         </div>
//                       </div>
//                     </div>}
//                     <div style={{ display:"grid", color: "black"}}>
//                         <div className="selectAge">
//                         <h2 style={{color:"#e5007e"}}>Please Select Your Age <span className="material-icons md-48" style={{verticalAlign: "-10px", fontSize:"40px"}}>person_search</span></h2>
//                         <select className="form-control" style={{maxWidth:"fit-content", marginLeft:"47vw"}} onChange={this.setAge.bind(this)}>
//                             {this.state.ages.map((item) => {
//                                 return (
//                                     <option key={item}>{item}</option>
//                                 );
//                             })}
//                         </select>
//                         </div>
//                         <div className="selectSalary">
//                             <h2 style={{color:"#e5007e"}}>Please Enter How Much You Earn In 2 Weeks (Average)<span className="material-icons md-48" style={{verticalAlign: "-10px", fontSize:"40px"}}>attach_money</span></h2>
//                             {this.state.negative === true && <h2 style={{color:"red"}}>If you earn nothing, just put $0</h2>}
//                             <input type="number" placeholder="0" onChange={this.setSalary.bind(this)}></input>
//                         </div>
//                         <div className="selectAge">
//                             <h2 style={{color:"#e5007e"}}>Please Select What You Will Start Doing Today <span className="material-icons md-48" style={{verticalAlign: "-10px", fontSize:"40px"}}>account_balance_wallet</span></h2>
//                             <div className="move">
//                                 <select className="form-control" style={{maxWidth:"fit-content", marginLeft: "7vmax"}} onChange={this.setCon.bind(this)}>
//                                     <option value="100">Take shorter showers</option>
//                                     <option value="200">Drink 1 less coffee</option>
//                                     <option value="300">Stop ordering food delivery</option>
//                                     <option value="400">Stop eating confectionaries</option>
//                                     <option value="500">Smoke 1 less packet of cigarettes</option>
//                                     <option value="600">Spend less nights out at the bar</option>
//                                     <option value="700">BYO water bottle everywhere</option>
//                                     <option value="800">Don't bet on anything for a year</option>
//                                     <option value="900">Only take public transport to work</option>
//                                     <option value="1000">Eat out out less</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <h2 style={{color:"#e5007e"}}>Would You Like To Adjust Your Contributions For Each Year?</h2>
//                         <div className="container" style={{color:"#e5007e", marginTop: "3vh"}}>
//                             <div className="row">
//                                 <div className="col">
//                                     <div className="yesButton">
//                                         <button className="btn btn-lg btn-dark" style={{height:"65px", width: "200px"}} onClick={() => this.setYearly(true)}>
//                                             <span>Yes</span>
//                                             <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>check_circle</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="col">
//                                     <button className="btn btn-lg btn-dark" style={{height:"65px", width: "200px"}} onClick={() => this.setYearly(false)}>
//                                         <span>No</span>
//                                         <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>clear</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         {this.state.yearly === false && <div className="selectAge">
//                             <h2 style={{color:"#e5007e"}}>Please Select How Long You Would Like To Reinvest Your Savings For <span className="material-icons md-48" style={{verticalAlign: "-10px", fontSize:"40px"}}>account_balance</span></h2>
//                             <select className="form-control" style={{maxWidth:"fit-content", marginLeft:"47vw"}} onChange={this.setFreq.bind(this)}>
//                                 {this.state.years.map((item, i) => {
//                                     return (
//                                         <option key={item}>{item} years</option>
//                                     );
//                                 })}
//                             </select>
//                         </div>}
//                         {this.state.yearly !== null && <div className="button" style={{marginTop: "6vh"}}>
//                             {this.state.yearly === false && <h3 style={{color:"black", fontWeight:"300"}}>We Will Now Calculate How Much Your Super Could Increase By,<br/>From Just Voluntary Contributions Over {this.state.freq} Years</h3>}
//                             {this.state.yearly && <h3 style={{color:"black", fontWeight:"300"}}>You Will Now Be Able to Calculate How Much<br/>Your Super Could Increase By, Until Retirement</h3>}
//                             <button className="btn btn-lg btn-dark" style={{height:"65px", width: "200px"}} onClick={() => this.tryNextPage()}>
//                                 <span>Calculate</span>
//                                 <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>calculate</span>
//                             </button>
//                         </div>}
//                     </div>
//                     {this.state.calculate && this.state.yearly === false && <Results salary={this.state.salary * 26} contribution={this.state.contribution} age={this.state.age} freq={this.state.freq} redo={this.state.redo}/>}
//                     {this.state.calculate && this.state.yearly === true && <Yearly salary={this.state.salary * 26} contribution={this.state.contribution} age={this.state.age}/>}
//                 </div>}
//             </div>
//         );
//     }
// }

export default App;
