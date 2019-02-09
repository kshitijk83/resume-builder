import React, { Component } from 'react';
import Input from '../../UI/input/input';
import classes from './auth.css';

class Auth extends Component{

    // checkValidity=(value ,rules)=>{
    //     let isValid = true;
    //     if(rules&&rules.isRequired){
    //         isValid = value.trim()!==''&&isValid;
    //     }

    //     if(rules&&rules.minLength){
    //         isValid = value.length>=rules.minLength&&isValid;
    //     }

    //     if(rules&&rules.maxLength){
    //         isValid = value.length<=rules.maxLength&&isValid;
    //     }

    //     return isValid;
    // }

    // onChangeHandler(event, controlName){
    //     const updatedControls={
    //         ...this.state.controls,
    //         [controlName]: {
    //             ...this.state.controls[controlName],
    //             value: event.target.value,
    //             valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
    //             touched: true
    //         }
    //     }

    //     this.setState({controls: updatedControls});
    // }

    authHandler = (event)=>{
        // event.preventDefault();
        // this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
        console.log("hey");
    }

    auth=(event)=>{
        event.preventDefault();
        // console.log("hsad");
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
        // console.log(formElements);
        let form = formElements.map(formElement=>(
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                changed={(event)=>this.props.changed(event, formElement.id)}
                />
        ))
        // console.log(this.props.controls);
        return(
            <div className={classes.Auth}>
                <form onSubmit={(event)=>this.auth(event)}>
                    {form}
                    <button className="btn">Login</button>
                </form>
                klfajsdfa
            </div>
        )
    }
}

export default Auth;