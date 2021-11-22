/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import DisplaySection from './Display';

const GeneralInfo = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const [edit, setEdit] = useState(true);

    const {
        firstName,
        lastName,
        email,
        phone,
    } = personalInfo;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPersonalInfo((preValue) => ({
            ...preValue,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit((prevMode) => !prevMode);
    };

    if (!edit) {
        return (
            <DisplaySection
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                handleEdit={handleSubmit}
            />
        );
    }

    return (
        <NoPrint>
            <Print printOnly className="errorMsg">
                Please fill out all fields.
            </Print>
            <section>
                <form className="formSection" onSubmit={handleSubmit}>
                    <label>
                        <p>First Name:</p>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p>Last Name:</p>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p>Email:</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p>Phone Number:</p>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button className="formBtn" type="submit">
                        Save
                    </button>
                </form>
            </section>
        </NoPrint>
    );
};

export default GeneralInfo;
