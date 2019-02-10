import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PersonalInfo from './containers/infos/personalInfo/personalInfo';
import Preview from './components/preview/preview';
import Skills from './containers/infos/skills/skills';
import Educations from './containers/infos/educations/educations';
import Projects from './containers/infos/projects/projects';
import Extras from './containers/infos/extras/extras';
import Auth from './containers/Auth/auth';
import axios from 'axios';
import Print from './components/print/print';

class App extends Component {

  state={
    controls: {
      email: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Your Email'
          },
          value: '',
          validation: {
              isRequired: true
          },
          valid: false,
          touched: false
      },
      password: {
          elementType: 'input',
          elementConfig: {
              type: 'password',
              placeholder: 'password'
          },
          value: '',
          validation: {
              isRequired: true,
              minLength: 6
          },
          valid: false,
          touched: false
      }
  },
    personalInfo: {
      name:{
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
        },
        value: '',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
    },
      email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your email'
        },
        value: '',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
    },
      phone: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'phone'
        },
        value: '',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
    }
  },
  skills: [{
      skill: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your skills'
        },
        value: '',
        id: '0',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
      },
    }],
    educations: [{
      education: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            placeholder: 'education',
        },
        value: '',
        std: '',
        details: '',
        id: '0',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
      }
    }],
    projects: [{
      project: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'projects',
        },
        value: '',
        desc: '',
        id: '0',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
      },
    }],
    extras: [{
      extra: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'extra details',
        },
        value: '',
        id: '0',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
      },
    }]
  }

  onChangeHandler=(event, id)=>{
    const info = {...this.state.personalInfo};
    const data = {...info[id]};
    data.value = event.target.value;
    info[id] = data;
    this.setState({ personalInfo: info });
  }

  onChangeSkillHandler(event, id){
    const info = [...this.state.skills];

    let changedInfo = info.map((s)=>{
      if(s.skill.id===id){
        s.skill.value = event.target.value;
      }
      return s;
    })

    this.setState({skills: changedInfo});
  }

  addHandler=(numSkills)=>{
    const info = [...this.state.skills];
    console.log(numSkills);
    info.push({
      skill: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your skills'
        },
        value: '',
        id: numSkills+'',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
      }
    })
    this.setState({skills: info});
  }

  deleteHandler=(index, property)=>{
    const info = [...this.state[property]];
    // console.log(info);
    info.splice(index, 1);
    // console.log(info);

    this.setState({ [property]: info });
  }

  onChangeEduHandler=(e, id, property)=>{
    const info = [...this.state.educations];

    let changedInfo = info.map((edu)=>{
      if(edu.education.id===id){
        edu.education[property] = e.target.value;
      }
      return edu;
    })


    this.setState({educations: changedInfo});
  }

  onChangeProjectHandler=(e, id, property)=>{
    const info = [...this.state.projects];

    let changedInfo = info.map((p)=>{
      
      if(p.project.id==id){
        p.project[property] = e.target.value;
      }
      return p;
    })

    this.setState({projects: changedInfo});
  }

  addEduHandler=(num)=>{
    const info = [...this.state.educations];
    info.push({
      education: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'education'
        },
        value: '',
        id: num+'',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
      }
    });
    this.setState({educations: info});
  }

  addProjectHandler=(num)=>{
    const info = [...this.state.projects];
    info.push({
      project: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Projects',
          },
          value: '',
          desc: '',
          id: num+'',
          validation: {
            isRequired: true
          },
          valid: false,
          touched: false
        },
      }
    )
      
      console.log(info);
    this.setState({projects: info});
    // console.log('sfd');
  }

  addExtrasHandler=(num)=>{
    // console.log(num);
    const info = [...this.state.extras];
    info.push({
      extra: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Add Extra Info'
        },
        value: '',
        id: (num-1)+'',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
      }
    });
    this.setState({extras: info});

  }

  onChangeExtrasHandler=(e, id)=>{
    const info = [...this.state.extras];
    
    let changedInfo = info.map((p)=>{
      
      if(p.extra.id==id){
        p.extra.value = e.target.value;
      }
      return p;
    })

    this.setState({extras: changedInfo}); }


    checkValidity=(value ,rules)=>{
      let isValid = true;
      if(rules&&rules.isRequired){
          isValid = value.trim()!==''&&isValid;
      }

      if(rules&&rules.minLength){
          isValid = value.length>=rules.minLength&&isValid;
      }

      if(rules&&rules.maxLength){
          isValid = value.length<=rules.maxLength&&isValid;
      }

      return isValid;
  }


    onChangeAuthHandler=(event, controlName)=>{
      // console.log(this.state.controls[controlName].validation);
      const updatedControls={
        ...this.state.controls,
      [controlName]: {
          ...this.state.controls[controlName],
          value: event.target.value,
          valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
          touched: true
      }
    }
      this.setState({controls: updatedControls});
    }

    authHandler=(event)=>{
      event.preventDefault();
      let words = this.state;
      // console.log(this.state);

      axios.post("http://localhost:5000/user/data", {
        ...words
      })
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

  render() {

    const personalData = [];
    for(let key in this.state.personalInfo){
      
      if(key==='name'){
        personalData.push({
          id: key,
          config: this.state.personalInfo[key],
          value: this.state.personalInfo[key].value
        })
      }else if(key==='email'){
        personalData.push({
          id: key,
          config: this.state.personalInfo[key],
          value: this.state.personalInfo[key].value
        })
      }else if(key==='phone'){
        personalData.push({
          id: key,
          config: this.state.personalInfo[key],
          value: this.state.personalInfo[key].value
        })
      }
    }

    return (
      <div className="App">

          <Preview
            name={this.state.personalInfo.name.value}
            email={this.state.personalInfo.email.value}
            phone={this.state.personalInfo.phone.value}
            skills={this.state.skills}
            delete={(index, property)=>this.deleteHandler(index, property)}
            educations={this.state.educations}
            projects={this.state.projects}
            extras={this.state.extras}/>

        <Switch>

        <Route path="/" exact render={()=>{
            return <Auth
            controls={this.state.controls}
            changed = {(event, controlName)=>this.onChangeAuthHandler(event, controlName)}
            auth = {(event)=>this.authHandler(event)}
            />
          }} />

          <Route path="/personalInfo" exact render={()=>{
            return <PersonalInfo
            personalData={personalData}
            changed = {(event, id)=>this.onChangeHandler(event, id)}/>
          }} />
          <Route path="/skills" exact render={()=>{
            return <Skills
            skills={this.state.skills}
            changed = {(event, id)=>this.onChangeSkillHandler(event, id)}
            add={(num)=>this.addHandler(num)}/>
          }} />

          <Route path="/education" exact render={()=>{
            return <Educations
            educations={this.state.educations}
            addEdu = {(num)=>this.addEduHandler(num)}
            changed = {(e, id, property)=>this.onChangeEduHandler(e, id, property)}
            />
          }} />

          <Route path="/projects" exact render={()=>{
            return <Projects
            projects={this.state.projects}
            add={(num)=>this.addProjectHandler(num)}
            changed = {(e, id, property)=>this.onChangeProjectHandler(e, id, property)}
            />
          }} />
          
          <Route path="/extras" exact render={()=>{
            return <Extras
            extras={this.state.extras}
            add={(num)=>this.addExtrasHandler(num)}
            changed = {(e, id)=>this.onChangeExtrasHandler(e, id)}
            />
          }} />

          <Route path="/print" exact render={()=>{
            return <Print
            name={this.state.personalInfo.name.value}
            email={this.state.personalInfo.email.value}
            phone={this.state.personalInfo.phone.value}
            skills={this.state.skills}
            delete={(index, property)=>this.deleteHandler(index, property)}
            educations={this.state.educations}
            projects={this.state.projects}
            extras={this.state.extras}/>
          }} />

        </Switch>

      </div>
    );
  }
}

export default App;