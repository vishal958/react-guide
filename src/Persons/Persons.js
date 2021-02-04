import Radium from 'radium'
import './Person.css'

const Person =(props) =>{
    const style = {
        '@media (min-width:500px)' :{
            width:'450px'
        }
    }

    const rand = Maths.radom()
    if(rand > 0.7){
        throw new Error('Something Went Wrong')
    }

    return(
        <div className="Person">
            <p onClick = {props.click}>Hello my name {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type= 'text'  onChange={props.nameChange} value={props.name} />
        </div>
    );


}
export default Radium(Person)