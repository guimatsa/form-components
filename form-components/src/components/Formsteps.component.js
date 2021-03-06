import React from "react"

class Test23 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email:  '',
      userFirstName: '',
      userLastName: '',
      birthdate: '',
      password: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { email, userFirstName, userLastName, birthdate, password } = this.state
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           user First Name: ${userFirstName} \n
           user Last Name: ${userLastName} \n
           user Birthdate: ${birthdate} \n
           Password: ${password}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3? 4: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    
    currentStep = currentStep <= 1  ? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep < 4){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>
      <h1>Sign In</h1>
      <p>  {this.state.email} </p> 

      <form onSubmit={this.handleSubmit}>
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
          userFirstName={this.state.userFirstName}
          userLastName={this.state.userLastName}
        />
        
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          birthdate={this.state.birthdate}
        />
        <Step4 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="userFirstName">First Name</label>
      <input
        className="form-control"
        id="userFirstName"
        name="userFirstName"
        type="text"
        placeholder="Enter username"
        value={props.userFirstName}
        onChange={props.handleChange}
        />

      <label htmlFor="userFirstName">Last Name</label>
      <input
        className="form-control"
        id="userLastName"
        name="userLastName"
        type="text"
        placeholder="Enter username"
        value={props.userLastName}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
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
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  } 
  return(
    <React.Fragment>
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
    <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}
export default Test23;