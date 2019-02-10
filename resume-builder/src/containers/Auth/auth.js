import React, { Component } from 'react';
import Input from '../../UI/input/input';
import './auth.css';

class Auth extends Component{

    auth=(event)=>{
        event.preventDefault();
        this.props.auth(event);
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
        return(
            <div className="auth">
                <form onSubmit={(event)=>this.auth(event)}>
                    {form}
                    <button className="btn">Login</button>
                </form>
            </div>
        )
    }
}

export default Auth;