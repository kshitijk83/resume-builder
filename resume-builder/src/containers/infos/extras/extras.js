import React, { Component } from 'react';
import Input from '../../../UI/input/input';
import { Link } from 'react-router-dom';
import './extras.css';

class Extras extends Component{
    constructor(props) {
        super(props);
        this.state = {
            num_extras: props.extras.length,
        };
    }

    addNum=()=>{
        let num = this.state.num_extras+1;
        // console.log(num);
        this.setState({ num_extras: num });
        this.props.add(num);
    }

    render(){
        let extras = [...this.props.extras];
        // console.log(this.props.extras);
        let input = extras.map((e)=>{
            return (
            <div className="extras-box" key={extras.indexOf(e)}>
                <div className="extras-container">
                <span className="details">Enter Details</span>
                    <Input
                    elementType={e.extra.elementConfig.elementType}
                    elementConfig={e.extra.elementConfig}
                    value={e.extra.value}
                    invalid={!e.extra.valid}
                    touched={e.extra.touched}
                    shouldValidate={e.extra.validation}
                    changed={(event)=>this.props.changed(event, e.extra.id, "value")}
                    />
                </div>
            </div>
            
            )
        });
        return(
            <div className="box">
                ENTER EXTRA DETAILS
                <div className="extra-box-con">
                {input}
                </div>
                <div className="btn-container">
                    <button onClick={this.addNum} >add</button>
                    <Link to="/print" style={
                        {
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '1em 1.5em',
                            textDecoration: 'none',
                            textTransform: 'uppercase'
                        }
                        }  >Preview</Link>
                </div>
            </div>
        )
    }
}

export default Extras;