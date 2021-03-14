import React, { Component } from 'react'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData';

export default class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            beacon: 1
        },
        totalPrice: 0
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0
        for (let param of query.entries()) {
            if (param[0] == 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }


        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
    }

    checkoutCancelled = () => {
        this.props.history.goBack()
    }
    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued}
                />
                <Route path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} {...props} />)} />
            </div>
        )
    }
}
