import React, { Component } from 'react';
import classes from './preview.css';
class Preview extends Component {
    
    

    render(){
        let skills = this.props.skills.map((s)=>{
            return (
            <div key={s.skill.id}>
                <p>{s.skill.value}</p>
                {s.skill.value?<button onClick={()=>this.props.delete(this.props.skills.indexOf(s))} >delete</button>:null}
            </div>
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
                <div className={classes.skills}>
                skills: {skills}
                </div>
            </>
        );
    }
}

export default Preview;