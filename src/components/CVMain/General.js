/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

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
        let value = e.target.value;

        setPersonalInfo((preValue) => {
            return {
                ...preValue,
                [e.target.name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit((prevMode) => !prevMode);
    };

    if (!edit) {
        return (
            <TextSection
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                handleEdit={handleSubmit}
            />
        );
    }

    return (
        <section>
            <form>
                <p>First Name:</p>
                <label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">
                    Save
                </button>
            </form>
        </section>
    );
};

export default GeneralInfo;
