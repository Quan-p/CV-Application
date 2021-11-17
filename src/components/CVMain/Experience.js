/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import DisplaySection from './Display';

const Experience = (props) => {
    const [experienceInfo, setExperienceInfo] = useState({
        companyName: '',
        position: '',
        from: '',
        to: '',
        tasks: '',
    });

    const [edit, setEdit] = useState(true);

    const {
        companyName,
        position,
        from,
        to,
        tasks,
    } = experienceInfo;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setExperienceInfo((preValue) => ({
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
                companyName={companyName}
                position={position}
                from={from}
                to={to}
                tasks={tasks}
                handleEdit={handleSubmit}
            />
        );
    }

    return (
        <NoPrint>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="companyName">
                        <p>Company Name:</p>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={companyName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p>Position:</p>
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={position}
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
                    <p>Tasks:</p>
                    <textarea
                        name="tasks"
                        placeholder="Tasks"
                        value={tasks}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">
                        Save
                    </button>
                    <button
                        className="formBtn"
                        type="button"
                        onClick={() => handleDelete('experienceIds', id)}>
                        Delete
                    </button>
                </form>
            </section>
        </NoPrint>
    );
};

export default Experience;
