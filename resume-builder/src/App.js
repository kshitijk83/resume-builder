import React, { Component } from 'react';
import './App.css';
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
            placeholder: 'Your skills'
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
      skill1: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your skills'
        },
        value: '',
        id: '1',
        validation: {
            isRequired: true
        },
        valid: false,
        touched: false
      },
    },{
      skill2: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your skills'
        },
        value: '',
        id: '2',
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

  render() {

    const personalData = [];
    for(let key in this.state.personalInfo){
      
      if(key==='name'){
        personalData.push({
          id: key,
          config: this.state.personalInfo[key],
          value: this.state.personalInfo[key].value
        })
        // console.log("sd");
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
      // console.log(personalData);
    }

    return (
      <div className="App">
        <PersonalInfo
        personalData={personalData}
        changed = {(event, id)=>this.onChangeHandler(event, id)}/>

        <Skills
        skills={this.state.skills}/>

        <Preview
        name={this.state.personalInfo.name.value}
        email={this.state.personalInfo.email.value}
        phone={this.state.personalInfo.phone.value}/>

      </div>
    );
  }
}

export default App;