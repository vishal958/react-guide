
import React from 'react'
import Aux from '../../../HigherOrderComponent/Auxilary'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
     .map(igKey => {
         return <li key ={igKey}><span>{igKey}</span>: {props.ingredients[igKey]} </li>
     })
    return(
        <Aux>
            <h3>Your Order </h3>
            <ul>
            {ingredientSummary}
            </ul>
            <p> Continue to Checkout?</p>
            <Button btnType ="Button Danger" clicked = {props.purchaseCanceled}> CANCEL </Button>
            <Button btnType="Button Success" clicked= {props.purchaseContinue}>CONTINUE </Button>
        </Aux>
    )
}


export default OrderSummary
