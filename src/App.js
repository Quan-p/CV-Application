/* eslint-disable react/function-component-definition */

import React, { useState } from 'react';
import uniqid from 'uniqid';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import GeneralInfo from './components/CVMain/General';
import Education from './components/CVMain/Education';
import Experience from './components/CVMain/Experience';
import './styles/App.css';
import './styles/Section.css';

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
        }
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
                        <h1 className="pageTitle">CV Application</h1>
                        <Print>
                            <div>
                                <h2 className="sectionTitle">General Information</h2>
                                <GeneralInfo />
                            </div>
                        </Print>
                        <div>
                            <Print>
                                <h2 className="sectionTitle">Education</h2>
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
                                <h2 className="sectionTitle">Experience</h2>
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
