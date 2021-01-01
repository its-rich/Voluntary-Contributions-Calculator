import React, { useEffect, useState } from 'react';
import './App.css';
import IntroScreen from './pages/IntroScreen.js';
import StartScreen from './pages/StartScreen.js';
import InputScreen from './pages/InputScreen.js';

// I learnt how to use hooks primarily from this web series
// https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h

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
    }, [pageNum]);

    return (
        <div className="App">
            <IntroScreen pageNum={pageNum}/>
            <StartScreen pageNum={pageNum} IncrementPage={() => IncrementPage()}/>
            <InputScreen pageNum={pageNum}/>
        </div>
    );
};

export default App;
