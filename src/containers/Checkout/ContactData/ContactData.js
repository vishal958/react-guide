import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'
import axios from '../../../axios-order'

export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        console.log(this.props.ingredients)
        console.log(this.props.totalPrice)
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Vishal',
                address: {
                    street: 'Valsad',
                    zipCode: '396170',
                    country: 'India'
                },
                email: 'vishalmaurya958@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                })
                this.props.history.push('/')
            }

            )
            .catch(
                this.setState({
                    loading: false,
                })
            )
    }
    render() {
        return (
            <div className='ContactData'>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className='Input' type='text' name='name' placeholder='Your Name' />
                    <input className='Input' type='email' name='email' placeholder='Your Email' />
                    <input className='Input' type='text' name='street' placeholder='Street Address' />
                    <input className='Input' type='text' name='postal' placeholder='Zipcode' />
                    <Button btnType="Button Success"
                        clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}
