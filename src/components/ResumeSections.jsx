import React, { useState } from 'react'
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import PracticalExperience from './PracticalExperience';

const ResumeSections = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const generalSectionState = {
        name, setName, email, setEmail, phone, setPhone
    }

    const [school, setSchool] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const educationSectionState = {
        school, setSchool, title, setTitle, date, setDate
    }

    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const experienceSectionState = {
        company, setCompany, position, setPosition, responsibilities, setResponsibilities, fromDate, setFromDate, toDate, setToDate
    }

    return (
        <>
            <h1>CV Builder</h1>
            {/* Header section for export button or something */}
            <GeneralInfo state={generalSectionState}/>
            <Education state={educationSectionState}/>
            <PracticalExperience state={experienceSectionState}/>
        </>
    )
}

export default ResumeSections