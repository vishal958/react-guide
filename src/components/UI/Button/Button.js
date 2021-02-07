import React from 'react'
import './Button.css'

const Button = (props) => {
    // const classes =["Button", {props.btnType}]
    return(
        <button className = {props.btnType} onClick = {props.clicked}>
        {props.children}
    </button>
    )
}


export default Button
