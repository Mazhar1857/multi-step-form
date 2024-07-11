import React, { useEffect, useState } from 'react'
import './Plans.css'
import arcade from '../assets/icon-arcade.svg'
import advance from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'
import { useDispatch, useSelector } from 'react-redux'
import { planAction } from '../store/planSlice'
const Plans = () => {

    const plans = {
        arcade: { monthly: 9, yearly: 90 },
        advance: { monthly: 12, yearly: 120 },
        pro: { monthly: 15, yearly: 150 },
    }

    const planCycle = useSelector(state => state.plan.planCycle)
    const yourPlan = useSelector(state => state.plan.plan)
    const dispatch = useDispatch();

    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlans = (n) => {

        switch (n) {
            case 'arcade':
                dispatch(planAction.setPlan({ plan: 'arcade', price: plans.arcade[planCycle], planCycle: planCycle }))
                setSelectedPlan(n);
                break;
            case 'advance':
                dispatch(planAction.setPlan({ plan: 'advance', price: plans.advance[planCycle], planCycle: planCycle }))
                setSelectedPlan(n);
                break;
            case 'pro':
                dispatch(planAction.setPlan({ plan: 'pro', price: plans.pro[planCycle], planCycle: planCycle }))
                setSelectedPlan(n);
                break;
        }
    }


    const handleplanCycle = () => {
        dispatch(planAction.setplanCycle());
    }

    useEffect(() => {
        if (yourPlan) {

            dispatch(planAction.setPlan({ plan: yourPlan.plan, price: plans[yourPlan.plan][planCycle], planCycle: planCycle }))
        }

    }, [planCycle])

    return (
        <div className='plans'>
            <h1>Select your plan</h1>
            <p>You have the option of monthy or yearly billing.</p>

            <div className={`plans-cards ${planCycle}`}>
                <div className={`arcade ${planCycle} ${selectedPlan === 'arcade' ? 'selected' : ''}`} onClick={() => handlePlans('arcade')}>
                    <img src={arcade} />
                    <div>
                        <div>Arcade</div>
                        <div>{`$${plans.arcade[planCycle]}`}/{planCycle === 'monthly' ? 'mo' : 'yrs'}</div>
                        <div>2 months free</div>
                    </div>
                </div>
                <div className={`advance ${planCycle} ${selectedPlan === 'advance' ? 'selected' : ''}`} onClick={() => handlePlans('advance')}>
                    <img src={advance} />
                    <div>
                        <div>Advanced</div>
                        <div>{`$${plans.advance[planCycle]}`}/{planCycle === 'monthly' ? 'mo' : 'yrs'}</div>
                        <div >2 months free</div>
                    </div>
                </div>
                <div className={`pro ${planCycle} ${selectedPlan === 'pro' ? 'selected' : ''}`} onClick={() => handlePlans('pro')}>
                    <img src={pro} />
                    <div>
                        <div>Pro</div>
                        <div>{`$${plans.pro[planCycle]}`}/{planCycle === 'monthly' ? 'mo' : 'yrs'}</div>
                        <div>2 months free</div>
                    </div>
                </div>
            </div>

            <div className={`plans-toggle ${planCycle}`}>
                <div>Monthly</div>
                <div className={`plans-toggle-btn ${planCycle}`} onClick={handleplanCycle} ></div>
                <div>Yearly</div>
            </div>

        </div>
    )
}

export default Plans
