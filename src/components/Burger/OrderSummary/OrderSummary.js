
import React from 'react'
import Aux from '../../../HigherOrderComponent/Auxilary'

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
        </Aux>
    )
}


export default OrderSummary
