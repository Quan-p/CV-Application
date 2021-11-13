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

    const { firstNme, lastName, email, phone } = personalInfo;

    return (
        <section>
            <form>
                <p>First Name:</p>
                <label>
                    <input
                        type='text'
                        placeholder='First Name'
                    />
                </label>
            </form>
        </section>
    );
}

export default GeneralInfo;