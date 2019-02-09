import React, { Component } from 'react';

class Preview extends Component {
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            num_skills: props.skills.length,
        };
    }
    
    render(){
        // console.log()
        let numSkills = this.state.num_skills;
        let skills = this.props.skills.map((s)=>{
            console.log(s);
            return (
            <>
                <p key={s.skill.id}>{s.skill.value}</p>
                {s.skill.value?<button onClick={()=>this.props.delete(numSkills)} >delete</button>:null}
            </>
            );
        })
        return (
            <>
                <div>
                    name:{this.props.name}
                </div>
                <div>
                    email: {this.props.email}
                </div>
                <div>
                    phone: {this.props.phone}
                </div>
                <div>
                skills: {skills}
                </div>
                <button onClick={()=>this.props.add(numSkills)} >add</button>
            </>
        );
    }
}

export default Preview;