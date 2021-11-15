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

    const { firstName, lastName, email, phone } = personalInfo;

    const handleChange = (e) => {
        let value = e.target.value;

        setPersonalInfo((preValue) => {
            return {
                ...preValue,
                [e.target.name]: value
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit((prevMode) => !prevMode);
    };

    return (
        <section>
            <form>
                <p>First Name:</p>
                <label>
                    <input
                        type = 'text'
                        name = 'firstName'
                        placeholder = 'First Name'
                        value = {firstName}
                        onChange = {handleChange}
                        required
                    />
                </label>
            </form>
        </section>
    );
}

export default GeneralInfo;