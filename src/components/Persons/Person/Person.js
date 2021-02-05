import Radium from 'radium'
import './Person.css'

const Person =(props) =>{
    console.log('Person js rendering')
    return(
        <div className="Person">
            <p onClick = {props.click}>Hello my name {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type= 'text'  onChange={props.nameChange} value={props.name} />
        </div>
    );


}
export default Radium(Person)