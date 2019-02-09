import React, { Component } from 'react';
import Input from '../../../UI/input/input';
import { Link } from 'react-router-dom';

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
                <span className="details">extra: </span>
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
            <div className="extras">
                extras:
                {input}
                <button onClick={this.addNum} >add</button>
                <Link to="/" >Preview</Link>
            </div>
        )
    }
}

export default Extras;