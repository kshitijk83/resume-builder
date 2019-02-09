import React, { Component } from 'react';
import Input from '../../../UI/input/input';
import { Link } from 'react-router-dom';
class Projects extends Component{

    constructor(props) {
        super(props);
        this.state = {
            num_projects: props.projects.length,
        };
    }

    addNum=()=>{
        let num = this.state.num_projects+1;
        // console.log(num);
        this.setState({ num_projects: num });
        this.props.add(num);
    }

    render(){
        // console.log(this.state.num_projects);
        let projects = [...this.props.projects];
        // console.log(this.props.projects);
        let input = projects.map((e)=>{
            return (
                <div key={e.project.id} className="project-con">
                    <div className="project-title-input">
                        <div className="title">Title</div>
                        <Input
                        elementType={e.project.elementConfig.elementType}
                        elementConfig={e.project.elementConfig}
                        value={e.project.value}
                        invalid={!e.project.valid}
                        touched={e.project.touched}
                        shouldValidate={e.project.validation}
                        changed={(event)=>this.props.changed(event, e.project.id, "value")}
                        />
                    </div>
                    <div className="project-desc">
                        <div className="desc">Description</div>
                        <textarea placeholder="Enter Description"
                        value={e.project.desc}
                        onChange={(event)=>this.props.changed(event, e.project.id, "desc")}
                        />
                    </div>
                </div>
            )
        });
        return(
            <div className="projects-container">
                {input}
                <button onClick={this.addNum} >add</button>
                <Link to="/extras" >Next</Link>
            </div>
        )
    }
}

export default Projects;