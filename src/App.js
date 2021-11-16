/* eslint-disable react/function-component-definition */

import React from 'react';
import GeneralInfo from './components/CVMain/General';
import Education from './components/CVMain/Education';
import Experience from './components/CVMain/Experience';

function App() {
    return (
        <div className="App">
            <main>
                <h1>CV Application</h1>
                <div>
                    <h2>General Information</h2>
                    <GeneralInfo/>
                </div>
                <div>
                    <h2>Education</h2>
                    <Education/>
                </div>
                <div>
                    <h2>Experience</h2>
                    <Experience/>
                </div>
            </main>
        </div>
    );
}

export default App;
