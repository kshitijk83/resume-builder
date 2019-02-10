import React, { Component } from 'react';
import './print.css';
// import Preview from '../preview/preview';
class Print extends Component {

    render(){
        let skills = this.props.skills.map((s)=>{
            return (
            <div className="skill-container main-desc" key={s.skill.id}>
                    <span className="skill-text" >{s.skill.value}</span>
            </div>
            );
        })

        // EDUCATION DELETION
        let educations = this.props.educations.map((s)=>{
            return (
            <div className="main-desc edu-btn-center" key={s.education.id}>
                <div className="container">
                    <div className="left">
                        {s.education.value}
                    </div>
                    <div className="center">
                        {s.education.details}
                    </div>

                    <div className="right">
                        {s.education.std}
                    </div>
                </div>
            </div>
            );
        })

        // PROJECT DELETION
        let projects = this.props.projects.map((p)=>{
            return (
                <div key={p.project.id} className="main-desc proj-desc">
                    <div className="title-project">
                        {p.project.value}
                    </div>
                    <div className="description">
                        {p.project.desc}
                    </div>
                </div>
            );
        })

        // EXTRAS DELETION

        let extras = this.props.extras.map((p)=>{
            return (
                <div key={p.extra.id} className="main-desc extra-desc">
                    {p.extra.value?<li className="extra-value">{p.extra.value}</li>:null}
                </div>
            );
        })

        return (
            <div className="print-container">
            <div className="pr" >
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
                <div className="personal-info">
                    <div className="pr-name">
                        {this.props.name}
                    </div>
                    <div className="pr-email">
                        {this.props.email}
                    </div>
                    <div className="pr-phone">
                        {this.props.phone}
                    </div>
                </div>
                <div className="main pr-skills">
                SKILLS {skills}
                </div>
                <div className="main pr-education">
                EDUCATION
                <div className="pr-educationEntry">
                    {educations}
                </div>
                </div>
                <div className= "main pr-projects">
                    PROJECT
                    <div className=" pr-projectEntry">
                    {projects}
                    </div>
                </div>
                <div className="main pr-extras">
                    EXTRAS
                    <div className=" pr-extrasEntry">
                        {extras}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Print;