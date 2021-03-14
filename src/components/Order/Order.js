import React from 'react'
import './Order.css'
import axios from '../../axios-order'
const Order = (props) => {

    const ingredients = []
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span style={{
            textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px'

        }} key={ig.name}>{ig.name}({ig.amount})</span>
    })
    return (
        <div className="Order">

            <p><strong>Ingredients: </strong>{ingredientOutput} </p>
            <p><strong> Price: &#8377;{props.price}</strong></p>

        </div>
    )
}

export default Order
