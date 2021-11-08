import React from 'react'

class FormSteps extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`les information renseigner sont: \n
        Email: ${email} \n
        Username: ${username} \n
        Password: ${password}`)
    }

    _next = () =>{
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep -1
        this.state({
            currentStep: currentStep
        })
    }

    /* fonction des bouttons */


}

export default FormSteps;
