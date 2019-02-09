import React, { Component } from 'react';
import Input from '../../../UI/input/input';
class skills extends Component{
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
    constructor(props) {
        super(props);
        this.state = {
            num_skills: props.skills.length,
        };
    }

    addNum=()=>{
        let num = this.state.num_skills+1;
        console.log(num);
        this.setState({ num_skills: num });
        this.props.add(num);
    }

    render(){
        let skills = [...this.props.skills];
        console.log(this.props.skills);
        let input = skills.map((s)=>{
            return <Input
            key={skills.indexOf(s)}
            elementType={s.skill.elementConfig.elementType}
            elementConfig={s.skill.elementConfig}
            value={s.skill.value}
            invalid={!s.skill.valid}
            touched={s.skill.touched}
            shouldValidate={s.skill.validation}
            changed={(event)=>this.props.changed(event, s.skill.id)} />
        })
        return (
            <>
                {input}
                <button onClick={this.addNum} >add</button>
            </>
        );
    }
    
}

export default skills;