import React from 'react';
import Input from '../../../UI/input/input';
import { Link } from 'react-router-dom';
import './personalInfo.css';

const personalInfo = (props) => {
    console.log(props); 
    let data = [...props.personalData];
    // console.log(props);
    let inputs = data.map((d)=>{
        return <Input
        key={d.id}
        elementType={d.config.elementType}
        elementConfig={d.config.elementConfig}
        value={d.config.value}
        invalid={!d.config.valid}
        touched={d.config.touched}
        shouldValidate={d.config.validation}
        changed={(event)=>props.changed(event, d.id)}/>
    });
    return (
        <div className="box">
            {inputs}
            <Link to="/skills" style={
                {
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '1em 1.5em',
                    textDecoration: 'none',
                    textTransform: 'uppercase'
                }
            }>Skills</Link>
        </div>
    );
}

export default personalInfo;