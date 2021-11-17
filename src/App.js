/* eslint-disable react/function-component-definition */

import React, { useState } from 'react';
import uniqid from 'uniqid';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
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

    const handleDelete = (type, id) => {
        if (type === 'experienceIds') {
            setExperienceIds((prevExpIds) => {
                const newList = prevExpIds.filter((key) => key !== id);
                return newList;
            });
        } else {
            setEducationIds((prevEduIds) => {
                const newList = prevEduIds.filter((key) => key !== id);
                return newList;
            });
        };
    };

    const eduComponents = educationIds.map((id) => (
        <Education key={id} id={id} handleDelete={handleDelete} />
    ));
    const expComponents = experienceIds.map((id) => (
        <Experience key={id} id={id} handleDelete={handleDelete} />
    ));

    return (
        <div className="App">
            <PrintProvider>
                <NoPrint>
                    <main>
                        <h1>CV Application</h1>
                        <Print>
                            <div>
                                <h2>General Information</h2>
                                <GeneralInfo/>
                            </div>
                        </Print>
                        <div>
                            <Print>
                                <h2>Education</h2>
                                <Education/>
                                {eduComponents}
                            </Print>
                            <button
                                type="button"
                                className="addBtn"
                                onClick={() => handleClick('educationIds')}>
                                Add
                            </button>
                        </div>
                        <div>
                            <Print>
                                <h2>Experience</h2>
                                <Experience/>
                                {expComponents}
                            </Print>
                            <button
                                type="button"
                                className="addBtn"
                                onClick={() => handleClick('experienceIds')}>
                                Add
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                window.print();
                            }}
                            className="printBtn">
                            Print
                        </button>
                    </main>
                </NoPrint>
            </PrintProvider>
        </div>
    );
};

export default App;
