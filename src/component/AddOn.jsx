import React, { useEffect, useState } from 'react'
import './AddOn.css'
import check from '../assets/icon-checkmark.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addOnaction } from '../store/addOnSlice';
import { addOns } from '../data';
const AddOn = () => {
    const planCycle = useSelector(state => state.plan.planCycle)
    const addOn = useSelector(state => state.addOn);
    const dispatch = useDispatch();

    const handleAddOn = (n) => {
        dispatch(addOnaction.setAddOn(n));
    }

    return (
        <div className='add-on'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experiance</p>

            <div className='add-on-cards'>
                <div className={`card ${addOn.includes('Online service') ? 'checked' : ''}`} onClick={() => handleAddOn('Online service')}>
                    <div>
                        <div className='check-box'>
                            <img src={check} alt="" />
                        </div>
                        <div>
                            <h2>Online service</h2>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <div>
                        <p>{`+$${addOns['Online service'][planCycle]}`}/{planCycle === 'monthly' ? 'mo' : 'yr'}</p>
                    </div>
                </div>

                <div className={`card ${addOn.includes('Larger storage') ? 'checked' : ''}`} onClick={() => handleAddOn('Larger storage')}>
                    <div>
                        <div className='check-box'>
                            <img src={check} alt="" />
                        </div>
                        <div>
                            <h2>Larger storage</h2>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <div>
                        <p>{`+$${addOns['Larger storage'][planCycle]}`}/{planCycle === 'monthly' ? 'mo' : 'yr'}</p>
                    </div>
                </div>

                <div className={`card ${addOn.includes('Customizable profile') ? 'checked' : ''}`} onClick={() => handleAddOn('Customizable profile')}>
                    <div>
                        <div className='check-box'>
                            <img src={check} alt="" />
                        </div>
                        <div>
                            <h2>Customizable profile</h2>
                            <p>Custom theme on your profile</p>
                        </div>
                    </div>
                    <div>
                        <p>{`+$${addOns['Customizable profile'][planCycle]}`}/{planCycle === 'monthly' ? 'mo' : 'yr'}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddOn
