/* eslint-disable react/function-component-definition */

import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import DisplaySection from './Display';

const Education = (props) => {
    const [educationInfo, setEductionInfo] = useState({
        schoolName: '',
        major: '',
        from: '',
        to: '',
    });

    const [edit, setEdit] = useState(true);

    const {
        schoolName,
        major,
        from,
        to,
    } = educationInfo;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEductionInfo((preValue) => ({
            ...preValue,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit((prevMode) => !prevMode);
    };

    const { id, handleDelete } = props;

    if (!edit) {
        return (
            <DisplaySection
                schoolName={schoolName}
                major={major}
                from={from}
                to={to}
                handleEdit={handleSubmit}
            />
        );
    }

    return (
        <NoPrint>
            <Print printOnly className="errorMs>g">
                Please fill out all fields.
            </Print>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="schoolName">
                        <p>First Name:</p>
                        <input
                            type="text"
                            name="schoolName"
                            placeholder="School Name"
                            value={schoolName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p>Major:</p>
                        <input
                            type="text"
                            name="major"
                            placeholder="Major"
                            value={major}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p>From:</p>
                        <input
                            type="date"
                            name="from"
                            placeholder="From"
                            value={from}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p>To:</p>
                        <input
                            type="date"
                            name="to"
                            placeholder="To"
                            value={to}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">
                        Save
                    </button>
                    <button
                        className="formBtn"
                        type="button"
                        onClick={() => handleDelete('educationIds', id)}>
                        Delete
                    </button>
                </form>
            </section>
        </NoPrint>
    );
};

export default Education;
