import React from 'react'
import './ThankYou.css'
import thankIcon from '../assets/icon-thank-you.svg'
const ThankYou = () => {
    return (
        <div className='thank-you'>
            <img src={thankIcon} alt="" />
            <h1>Thank You!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    )
}

export default ThankYou
