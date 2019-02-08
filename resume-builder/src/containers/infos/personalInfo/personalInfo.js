import React from 'react';
import Input from '../../../UI/input/input';

const personalInfo = (props) => {
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
        <>
            {inputs}
        </>
    );
}

export default personalInfo;