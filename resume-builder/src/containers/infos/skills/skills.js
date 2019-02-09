import React from 'react';
import Input from '../../../UI/input/input';
const skills = (props) => {
    let skills = [...props.skills];
    // console.log(skills[0].skill.value);
    // console.log(skills);
    // console.log(skills[0].skill);
    // {
    //     skills.push({
    //         id: props.skills[key].id,
    //         value: props.skills[key].value,
    //         config: props.skills[key]
    //     });
    //     console.log(key);
    // }
    // console.log(skills);

    let input = skills.map((s)=>{
        // console.log(s.skill.id);
        return <Input
        key={s.skill.id}
        elementType={s.skill.elementConfig.elementType}
        elementConfig={s.skill.elementConfig}
        value={s.skill.value}
        invalid={!s.skill.valid}
        touched={s.skill.touched}
        shouldValidate={s.skill.validation}
        changed={(event)=>props.changed(event, s.skill.id)} />
    })
    return (
        <>
            {input}
        </>
    );
}

export default skills;