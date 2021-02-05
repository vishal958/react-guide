import React ,{ Component } from "react";
import Radium from 'radium'
import './Person.css'

class Person extends Component {
    render(){
        console.log('Person js rendering')
        return(
            <div className="Person">
                <p onClick = {this.props.click}>Hello my name {this.props.name} and age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type= 'text'  onChange={this.props.nameChange} value={this.props.name} />
            </div>
        );
    }
}
export default Radium(Person)