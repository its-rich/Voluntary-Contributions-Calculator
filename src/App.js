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

//
//     render() {
//         return(
//             <div className="App">
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
