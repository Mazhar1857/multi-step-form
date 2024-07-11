import React, { useEffect, useState } from 'react'
import './PersonalInfo.css'
import { useDispatch, useSelector } from 'react-redux'
import { personalInfoAction } from '../store/personalInfoSlice';
const PersonalInfo = () => {
    const personalInfo = useSelector(state => state.personalInfo);
    const dispatch = useDispatch();

    // const [info, setInfo] = useState({
    //     'name': { 'value': '', 'status': 'valid' },
    //     'email': { 'value': '', 'status': 'valid' },
    //     'phoneNumber': { 'value': '', 'status': 'valid' }
    // })

    const handleName = (e) => {
        const name = e.target.value
        const nameRegex = /^[A-Za-z\s]*$/
        if (nameRegex.test(name)) {
            dispatch(personalInfoAction.setName({ value: name, status: 'valid' }))
        }
    }

    const handleEmail = (e) => {
        const email = e.target.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            dispatch(personalInfoAction.setEmail({ value: email, status: 'valid' }))
        } else {
            dispatch(personalInfoAction.setEmail({ value: email, status: 'valid' }))
        }
    }

    const handlePhoneNumber = (e) => {
        const number = e.target.value

        if (!isNaN(number)) {
            dispatch(personalInfoAction.setPhoneNumber({ value: number, status: 'valid' }))
        }
    }

    return (
        <div className='personal-info'>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div className={personalInfo['name']['status'] === 'valid' ? 'valid' : 'invalid'}>
                <div >This field is required</div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='e.g.Stephen King' onChange={handleName} />
            </div>

            <div className={personalInfo['email']['status'] === 'valid' ? 'valid' : 'invalid'}>
                <div >This field is required</div>
                <label htmlFor="email-id" >Email Address</label>
                <input type="text" id='email-id' placeholder='e.g.stephenking@lorem.com' onChange={handleEmail} />
            </div>

            <div className={personalInfo['phoneNumber']['status'] === 'valid' ? 'valid' : 'invalid'}>
                <div >This field is required</div>
                <label htmlFor="phone-number">Phone Number</label>
                <input type="text" id='phone-number' placeholder='e.g.9134567890' onChange={handlePhoneNumber} />
            </div>
        </div>
    )
}

export default PersonalInfo
