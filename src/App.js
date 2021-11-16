/* eslint-disable react/function-component-definition */

import React, { useState } from 'react';
import uniqid from 'uniqid';
import GeneralInfo from './components/CVMain/General';
import Education from './components/CVMain/Education';
import Experience from './components/CVMain/Experience';

const App = () => {
    const [educationIds, setEducationIds] = useState([]);
    const [experienceIds, setExperienceIds] = useState([]);

    const handleClick = (type) => {
        if (type === 'experienceIds') {
            setExperienceIds((prevExpIds) => [...prevExpIds, uniqid()]);
        } else {
            setEducationIds((prevEduIds) => [...prevEduIds, uniqid()]);
        }
    };

    return (
        <div className="App">
            <main>
                <h1>CV Application</h1>
                <div>
                    <h2>General Information</h2>
                    <GeneralInfo/>
                </div>
                <div>
                    <Print>
                        <h2>Education</h2>
                        <Education/>
                    </Print>
                    <button
                        type="button"
                        className="addBtn"
                        onClick={() => handleClick('educationIds')}>
                        Add
                    </button>
                </div>
                <div>
                    <h2>Experience</h2>
                    <Experience/>
                </div>
            </main>
        </div>
    );
};

export default App;
