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


export default App;
