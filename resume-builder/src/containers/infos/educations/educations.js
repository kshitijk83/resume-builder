import React, { Component } from 'react';
import Input from '../../../UI/input/input';
import './educations.css';
import { Link } from 'react-router-dom';

class educations extends Component{

    constructor(props) {
        super(props);
        this.state = {
            num_educations: props.educations.length,
        };
    }

    addNum=()=>{
        let num = this.state.num_educations+1;
        // console.log(num);
        this.setState({ num_educations: num });
        this.props.addEdu(num);
    }

    render(){
        let educations = [...this.props.educations];
        // console.log(this.props.educations);
        let input = educations.map((e)=>{
            return (
            <div className="input-box" key={educations.indexOf(e)}>
                <div className="input-container">
                <div className="name">Education Details</div>
                    <Input
                    elementType={e.education.elementConfig.elementType}
                    elementConfig={e.education.elementConfig}
                    value={e.education.value}
                    invalid={!e.education.valid}
                    touched={e.education.touched}
                    shouldValidate={e.education.validation}
                    changed={(event)=>this.props.changed(event, e.education.id, "value")}
                    />
                </div>
                <div className="input-container">
                <div className="degree">Degree/Standard</div>
                    <Input
                    elementType={e.education.elementConfig.elementType}
                    elementConfig={e.education.elementConfig}
                    value={e.education.std}
                    invalid={!e.education.valid}
                    touched={e.education.touched}
                    shouldValidate={e.education.validation}
                    changed={(event)=>this.props.changed(event, e.education.id, "std")}
                    />
                </div>
                <div className="input-container">
                <div className="details">Enter cgpa/percentage: </div>
                    <Input
                    elementType={e.education.elementConfig.elementType}
                    elementConfig={
                        {
                            ...e.education.elementConfig,
                            placeholder: "details"
                        }
                    }
                    value={e.education.details}
                    invalid={!e.education.valid}
                    touched={e.education.touched}
                    shouldValidate={e.education.validation}
                    changed={(event)=>this.props.changed(event, e.education.id, "details")}/>
                </div>
                
            </div>
            
            )
        });

        return (
            <>
                {input}
                <button onClick={this.addNum} >add</button>
                <Link to="/projects" >Next</Link>
            </>
        );
    }
    
}

export default educations;