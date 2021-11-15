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

    return (
        <section>
            <form>
                <p>First Name:</p>
                <label>
                    <input
                        type = 'text'
                        placeholder = 'First Name'
                        value = {firstName}
                        required
                    />
                </label>
            </form>
        </section>
    );
}

export default GeneralInfo;