import React, { Component } from 'react';
import classes from './preview.css';
class Preview extends Component {
    
    

    render(){
        let skills = this.props.skills.map((s)=>{
            return (
            <div key={s.skill.id}>
                    <p>{s.skill.value}</p>
                {s.skill.value?<button onClick={()=>this.props.delete(this.props.skills.indexOf(s), "skills")} >delete</button>:null}
            </div>
            );
        })

        // EDUCATION DELETION
        let educations = this.props.educations.map((s)=>{
            return (
            <div key={s.education.id}>
                <div className="left">
                    {s.education.value}
                </div>
                <div className="right">
                    {s.education.details}
                </div>

                {s.education.value?<button onClick={()=>this.props.delete(this.props.educations.indexOf(s), "educations")} >delete</button>:null}
            </div>
            );
        })

        // PROJECT DELETION
        let projects = this.props.projects.map((p)=>{
            return (
                <div key={p.project.id} className="projects">
                    <div className="title-project">
                        {p.project.value}
                    </div>
                    <div className="description">
                        {p.project.desc}
                    </div>
                    {p.project.value?<button onClick={()=>this.props.delete(this.props.projects.indexOf(p), "projects")} >delete</button>:null}
                </div>
            );
        })

        // EXTRAS DELETION

        let extras = this.props.extras.map((p)=>{
            return (
                <div key={p.extra.id} className="extras">
                    <div className="extra-value">
                        {p.extra.value}
                    </div>
                    {p.extra.value?<button onClick={()=>this.props.delete(this.props.extras.indexOf(p), "extras")} >delete</button>:null}
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
                <div>
                education:
                <div>
                    {educations}
                </div> 
                </div>
                <div>
                    Projects:
                    <div>
                    {projects}
                    </div>
                </div>
                <div>
                    extras:
                    <div>
                        {extras}
                    </div>
                </div>
                
            </>
        );
    }
}

export default Preview;