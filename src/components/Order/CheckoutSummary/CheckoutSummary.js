import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary.css'

const CheckoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1>We hope it tastes well </h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Button Danger"
                clicked={props.checkoutCancelled}>CANCEL
             </Button>
            <Button btnType="Button Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary