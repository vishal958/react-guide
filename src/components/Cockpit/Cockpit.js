import React from 'react'
import Radium from 'radium'

const Cockpit = (props) => {
    const style ={
        backgroundColor : 'green',
        color:'white',
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor : 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }
    let classes =[]
    if(props.showPersons){
        style.backgroundColor = 'red'
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
    }

    if(props.persons.length <= 2){
        classes.push('red')
    }
    if(props.persons.length <= 1){
        classes.push('bold')
    }

    return(
        <div>
            <p className ={ classes.join(' ')}>This is working</p>
            <button style ={ style } onClick ={props.clicked }> Toggle Person </button>
        </div>
    )

}
export default Radium(Cockpit)
