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
}

export default GeneralInfo;