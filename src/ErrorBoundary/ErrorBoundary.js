import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMeaasge: ''
    }

    componentDidCatch = (error, info) =>{
        this.setState({hasError:true, errorMeaasge:error})
    }
    
    render() {
        if(this.state.hasError){
            return <h1> {this.state.errorMeaasge} </h1>
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundary
