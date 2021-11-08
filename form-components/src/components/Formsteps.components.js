import React from 'react'

class FormSteps extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            userLastName: '',
            userFirstName: '',
            birthdate: '',
            password: '',
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { email, userLastName, password, userFirstName, birthdate } = this.state
        alert(`les information renseigner sont: \n
        Email: ${email} \n
        User_Last_name: ${userLastName} \n
        User_First_name: ${userFirstName} \n
        Birthdate: ${birthdate} \n
        Password: ${password}`)
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 5 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.state({
            currentStep: currentStep
        })
    }

    /* fonction des bouttons */

    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this._prev}
                >
                    Prev
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 5) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button"
                    onClick={this._next}
                >
                    Next
                </button>
            )
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <h1> Sign In  </h1>
                {this.state.email}
                <form onSubmit={this.handleSubmit} >
                    {/*
                        render the form steps and pass required props in
                    */}

                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />

                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />

                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        userFirstName={this.state.userFirstName}
                        userLastName={this.state.userLastName}
                    />
                    <Step4
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        birthdate={this.state.birthdate}
                    />
                    {this.previousButton()}
                    {this.nextButton()}

                </form>
            </React.Fragment>
        );
    }
}

function Step1(props) {
    if(props.currentStep !==1 ) {
        return null
    }
    return(
        <div className="form-group">
            <label htmlFor="email">Email adress</label>
            <input 
                className="form-control"
                id="email"
                name="email"
                type="email"
                placeholder="email@exemple.com"
                value={props.email}
                onChange={props.handleChange}
                />
        </div>
    );
}

function Step2(props) {
    if(props.currentStep !==2 ) {
        return null
    }
    return(
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                className="form-control"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={props.password}
                onChange={props.handleChange}
                />
        </div>
    );
}

function Step3(props) {
    if(props.currentStep !==3 ) {
        return null
    }
    return(
        <div className="form-group">
            <label htmlFor="fname">Firs tName</label>
            <input 
                className="form-control"
                id="fname"
                name="fname"
                type="text"
                placeholder="Enter your First name"
                value={props.userFirstName}
                onChange={props.handleChange}
                />

                <label htmlFor="lname">Last tName</label>
                <input
                    className="form-control"
                    id="lname"
                    name="lname"
                    type="text"
                    placeholder="Enter your Last name"
                    value={props.userLastName}
                    onChange={props.handleChange}
                />
        </div>
    );
}

function Step4(props) {
 if(props.currentStep !==2 ) {
        return null
    }
    return(
        <React.Fragment>
        <div className="form-group">
            <label htmlFor="birthdate">Birthdate</label>
            <input 
                className="form-control"
                id="birthdate"
                name="birthdate"
                type="date"
                placeholder="Enter birthdate"
                value={props.birthdate}
                onChange={props.handleChange}
                />
        </div>
        <button className="btn btn-success btn block">Sign Up</button>
        </React.Fragment>
    );
}


export default FormSteps;
