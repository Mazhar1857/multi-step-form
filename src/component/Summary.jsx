import React, { useEffect, useState } from 'react'
import { addOns, plans } from '../data';
import './Summary.css'
import { useSelector } from 'react-redux';
const Summary = () => {
    const addOn = useSelector(state => state.addOn);
    const planCycle = useSelector(state => state.plan.planCycle)
    const yourPlan = useSelector(state => state.plan.plan)
    const [totalCost, setTotalCost] = useState('')

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    useEffect(() => {

        setTotalCost(() => {
            if (addOn.length) {
                return ((addOn.map((item) => addOns[item][planCycle]).reduce((acc, cur) => acc + cur, 0)) + (yourPlan.price))
            }
        })

    })


    return (
        <div className='summary'>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>

            <div className='summary-table'>
                <div className='header'>
                    <div >
                        <h2>{yourPlan && capitalize(yourPlan.plan)}({yourPlan && capitalize(yourPlan.planCycle)})</h2>

                    </div>
                    <div>{`$${yourPlan && plans[yourPlan.plan][planCycle]}`}/{planCycle === 'monthly' ? 'mo' : 'yrs'}</div>
                </div>
                <div className='horizontal-line'></div>
                {addOn.map((item, index) => {
                    return <div className='price' key={`${item}_${index}`}>
                        <div>{item}</div>
                        <div>{`+$${addOns[item][planCycle]}`}/{planCycle === 'monthly' ? 'mo' : 'yr'}</div>
                    </div>
                })}

            </div>

            <div className='total-price'>
                <div>Total (per month)</div>
                <div>+${totalCost}/{planCycle === 'monthly' ? 'mo' : 'yr'}</div>
            </div>
        </div>
    )
}

export default Summary
