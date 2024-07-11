import React, { useEffect, useState } from 'react'
import './MobileNav.css'
import { useDispatch, useSelector } from 'react-redux';
import { currentPageAction } from '../../store/currentPageSlice';

function MobileNav() {

    const currentPage = useSelector(state => state.currentPage);
    const personalInfo = useSelector(state => state.personalInfo);
    const plan = useSelector(state => state.plan);
    const addOn = useSelector(state => state.addOn);
    const dispatch = useDispatch();


    const [activeNav, setActiveNav] = useState(1);

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



    const handleNav = (n) => {

        switch (n) {
            case 1:
                if (true) {
                    dispatch(currentPageAction.next(n))
                    setActiveNav(n)
                }
                break;
            case 2:
                if (planValidation()) {
                    dispatch(currentPageAction.next(n))
                    setActiveNav(n)
                }
                break;
            case 3:
                if (addOnValidation()) {
                    dispatch(currentPageAction.next(n))
                    setActiveNav(n)
                }
                break;
            case 4:
                dispatch(currentPageAction.next(n))
                setActiveNav(n)
                break;
        }
    }

    useEffect(() => {
        setActiveNav(currentPage)
    }, [currentPage])

    return (
        <div className='mobile-nav'>
            <div>
                <div onClick={() => handleNav(1)}>
                    <div className={activeNav === 1 ? 'active' : ''} >1</div>
                </div>
                <div onClick={() => handleNav(2)}>
                    <div className={activeNav === 2 ? 'active' : ''} >2</div>
                </div>
                <div onClick={() => handleNav(3)}>
                    <div className={activeNav === 3 ? 'active' : ''} >3</div>
                </div>
                <div onClick={() => handleNav(4)}>
                    <div className={activeNav === 4 ? 'active' : ''} >4</div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav
