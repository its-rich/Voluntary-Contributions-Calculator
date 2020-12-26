import React, { useEffect, useState } from 'react';
import './App.css';
import IntroScreen from './IntroScreen.js';
import StartScreen from './StartScreen.js';
// import Results from './Results.js';
// import Yearly from './Yearly.js';

function App() {

    // Used to track which page we are on
    const [page, setPage] = useState(0);

    // Increment the page number to switch to the appropriate screen
    function nextPage() {
        setPage(prevPage => prevPage + 1);
    }

    useEffect(() => {

        // Ensure that the intro screen only plays for 4 seconds
        if (page === 0) {
            setTimeout(
                () => nextPage(), 4000
            );
        }
    })

    return (
        <div className="App">
            <IntroScreen page={page}/>
            <StartScreen page={page} nextPage={() => nextPage()}/>
        </div>
    );
};


export default App;
