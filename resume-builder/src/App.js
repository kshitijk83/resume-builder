import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PersonalInfo from './containers/infos/personalInfo/personalInfo';
import Preview from './components/preview/preview';
import Skills from './containers/infos/skills/skills';

class App extends Component {

  state={
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

  deleteHandler=(index)=>{
    const info = [...this.state.skills];
    info.splice(index, 1);
    this.setState({ skills: info });
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
        delete={(index)=>this.deleteHandler(index)}/>

        <Switch>
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

          

          
        </Switch>

      </div>
    );
  }
}

export default App;