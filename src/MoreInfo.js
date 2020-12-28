import React, { useEffect, useState, useReducer } from 'react';
import { contributionsInfo, contributeNow } from './modal/ModalInfo.js';
import Modal from './modal/Modal.js';

const compoundingInterestExplained =
    <h4 style={{color:"black", fontWeight:"400", paddingLeft:"10%", paddingRight:"10%", marginBottom:"5vh"}}>This is because of <a target="_blank" href="https://aware.com.au/blog/compounding-interest-boost-your-super#:~:text=Compounding%20interest%20snowballs%20your%20savings,will%20help%20you%20in%20retirement.&text=Generally%2C%20if%20you%20earn%20over,grow%20until%20you%20reach%20retirement.">
    Compounding Interest!</a> By saving your money in your Super, you can grow it larger than just leaving it your bank account, as your Super fund offers higher interest rates.
     So your Super will grow even larger with regular voluntary contributions!
    </h4>

//
function MoreInfo(props) {

    const [contributeNow, setContributeNow] = useState(false);

    function OpenFHSS() {
        console.log(1);
        window.open('https://aware.com.au/blog/first-home-through-super');
    }

    return (
        <div>

            <Modal title="How To Make A Voluntary Contribution" text={contributionsInfo(props.contribution)} show={contributeNow}/>

            <h3 style={{color:"#e5007e", fontWeight:"400", paddingLeft:"10%", paddingRight:"10%", marginTop: "4vh"}}>
            How Did My Voluntary Contributions Turn Into ${props.superValue}?
            </h3>

            {compoundingInterestExplained}

            <div className="row" style={{marginBottom: "3vh"}}>
                <div className="col">
                    <h2 style={{color:"#e5007e"}}>Make A Voluntary Contribution Today!</h2>
                    <div style={{}}>
                    <button className="btn btn-lg btn-dark" style={{height:"65px", width: "250px"}} onClick={() => setContributeNow(!contributeNow)}>
                        <span>Contribute Now</span>
                        <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>
                        payments
                        </span>
                    </button>
                    </div>
                </div>

                <div className="col">
                    <h2 style={{color:"#e5007e"}}>Want To Contribute And Still Save For Your First Home?<br/><br/>Find Out How With First Home Super!</h2>
                    <button className="btn btn-lg btn-dark" style={{height:"65px", width: "250px"}} onClick={() => OpenFHSS()}>
                        <span>Find Out More</span>
                        <span className="material-icons md-48" style={{verticalAlign: "-14px", fontSize:"40px", marginLeft: "10px"}}>
                        home
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MoreInfo;
