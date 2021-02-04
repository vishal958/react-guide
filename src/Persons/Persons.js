const Person =(props) =>{
    return(
        <div className="person">
            <p onClick = {props.click}>Hello my name {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type= 'text'  onChange={props.nameChange} value={props.name} />
        </div>
    );


}
export default Person