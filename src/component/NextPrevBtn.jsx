import React, { useEffect, useState } from 'react'
import './nextPrevBtn.css'
import { useDispatch, useSelector } from 'react-redux'
import { currentPageAction } from '../store/currentPageSlice';
import { personalInfoAction } from '../store/personalInfoSlice';

const NextPrevBtn = () => {
    const currentPage = useSelector(state => state.currentPage);
    const personalInfo = useSelector(state => state.personalInfo);
    const plan = useSelector(state => state.plan);
    const addOn = useSelector(state => state.addOn);
    const dispatch = useDispatch();

    const [nextDisable, setNextDisable] = useState(false);
    const [preDisable, setPreDisable] = useState(false);

    const presonalInfoValidation = () => {
        let isValid = true
        if (personalInfo.name.value === '') {
            dispatch(personalInfoAction.setName({ value: '', status: 'invalid' }))
            isValid = false;
        }
        if (personalInfo.email.value === '') {
            dispatch(personalInfoAction.setEmail({ value: '', status: 'invalid' }))
            isValid = false;
        }
        if (personalInfo.phoneNumber.value === '') {
            dispatch(personalInfoAction.setPhoneNumber({ value: '', status: 'invalid' }))
            isValid = false;
        }
        return isValid;
    }

    const planValidation = () => {
        let isValid = true;
        if (!plan.plan) {
            isValid = false;
        }
        return isValid;
    }

    const addOnValidation = () => {
        let isValid = true;

        if (!addOn.length) {
            isValid = false
        }

        return isValid

    }

    const handleNext = () => {

        switch (currentPage) {
            case 1:
                if (presonalInfoValidation()) {
                    dispatch(currentPageAction.next(2))
                }
                break;
            case 2:
                if (planValidation()) {
                    dispatch(currentPageAction.next(3))
                }
                break;
            case 3:
                if (addOnValidation()) {
                    dispatch(currentPageAction.next(4))
                }
                break;
            case 4:
                dispatch(currentPageAction.next(5))
                break;
        }


    }

    const handlePrevious = () => {
        dispatch(currentPageAction.previous())
    }


    useEffect(() => {
        if (currentPage === 5) {
            setNextDisable(true);
        } else {
            setNextDisable(false)
        }

        if (currentPage === 1) {
            setPreDisable(true);
        } else {
            setPreDisable(false)
        }
    }, [currentPage])

    return (
        <div className='next-previous-btn ' >
            <button className={`previous ${preDisable ? 'disable' : ''}`} onClick={handlePrevious} disabled={preDisable}>Go Back</button>
            <button className={`next ${nextDisable ? 'disable' : ''}`} onClick={handleNext} disabled={nextDisable}>{currentPage === 4 ? 'Confirm' : 'Next Step'}</button>
        </div >
    )
}

export default NextPrevBtn
