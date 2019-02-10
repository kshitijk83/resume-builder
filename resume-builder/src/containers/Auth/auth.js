import React, { Component } from 'react';
import Input from '../../UI/input/input';
import './auth.css';
import { Route, Link, withRouter } from 'react-router-dom';
import Signup from '../Auth/signup/signup';

class Auth extends Component{

    state={
        signlog: 'sign',
        text: 'click to Log In',
    }

    auth=(event)=>{
        event.preventDefault();
        this.props.auth(event);
    }
    authSign=(event)=>{
        event.preventDefault();
        this.props.authSign(event);
    }

    toggle=()=>{
        if(this.state.signlog==='sign'){
            this.setState({signlog: 'login', text: 'click to signUp'})
        }
        if(this.state.signlog==='login'){
            this.setState({signlog: 'sign', text: 'click to login'})
        }
    }

    
    render(){
        const formElements = [];
        for(let key in this.props.controls){
            formElements.push({
                id: key,
                config: this.props.controls[key]
            })
        }
        let form = formElements.map(formElement=>(
            <label htmlFor={formElement.id} key = {formElement.id}
            className="inp">
                <Input 
                id={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                changed={(event)=>this.props.changed(event, formElement.id)}
                />
                <span className="border"></span>
            </label>
        ))

        // SIGN UP
        const formElementsSign = [];
        for(let key in this.props.controlSignUp){
            formElementsSign.push({
                id: key,
                config: this.props.controlSignUp[key]
            })
        }
        let formSign = formElementsSign.map(formElement=>(
            <label htmlFor={formElement.id} key = {formElement.id}
            className="inp">
                <Input 
                id={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                changed={(event)=>this.props.changedSign(event, formElement.id)}
                />
                <span className="border"></span>
            </label>
            
        ))
        return(
            <>
            <div className="auth">
                <h1>{this.props.flash}</h1>
                <button onClick={this.toggle} >{this.state.text}</button>
                {this.state.signlog==='login'?<form onSubmit={(event)=>this.auth(event)}>{form}<button className="btn">Login</button></form>: null}
                {this.state.signlog==='sign'?<form onSubmit={(event)=>this.authSign(event)}>{formSign}<button className="btn">Sign Up</button></form>:null}
            </div>
        </>
        )
    }
}

export default withRouter(Auth);