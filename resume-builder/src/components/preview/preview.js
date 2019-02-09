import React, { Component } from 'react';
import './preview.css';
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
                <div className="center">
                    {s.education.details}
                </div>

                <div className="right">
                    {s.education.std}
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
            <div >
            <span className="pr-wid pr-green">
            </span>
            <span className="pr-wid pr-blue">
            </span>
            <span className="pr-wid pr-purple">
            </span>
            <span className="pr-wid pr-yellow">
            </span>
            <span className="pr-wid pr-red">
            </span>
            </div>
                <div className="pr-name">
                    Shivam{this.props.name}
                </div>
                <div className="pr-email">
                    email: {this.props.email}
                </div>
                <div className="pr-phone">
                    phone: {this.props.phone}
                </div>
                <div className="pr-skills">
                skills: {skills}
                </div>
                <div className="pr-education">
                education:
                <div className="pr-educationEntry">
                    {educations}
                </div>
                </div>
                <div className= "pr-projects">
                    Projects:
                    <div className="pr-projectEntry">
                    {projects}
                    </div>
                </div>
                <div className="pr-extras">
                    extras:
                    <div className="pr-extrasEntry">
                        {extras}
                    </div>
                </div>
                
            </>
        );
    }
}

export default Preview;