import React ,{ Component } from "react";
import './App.css'
import Persons from './Persons/Persons'
import Radium from 'radium'

// const App = props =>{
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { name:'Vishal1', age:24 },
//             { name:'Aakash', age:21 },
//             { name:'Mauya', age:24 },
//         ]
//     })
//     const [otherState, setOtherState] = useState('other state')
//     console.log(personsState,otherState)
//     const switchNameHandler= () =>{
//         setPersonsState({
//             persons: [
//                 { name:'Vishal Maurya', age:27 },
//                 { name:'Aakash', age:21 },
//                 { name:'Mauya', age:24 },
//             ]
//         })
//     }
//     return(
//         <div className ="App">
//             <button onClick ={switchNameHandler}> Switch Name </button>
//             <Persons name ={personsState.persons[0].name} age ={personsState.persons[0].age}>Children</Persons>
//             <Persons name ={personsState.persons[1].name} age ={personsState.persons[1].age}>Children</Persons>
//             <Persons name ={personsState.persons[2].name} age ={personsState.persons[2].age}>Children</Persons>
//         </div>
//     )
// }

// export default App

class App extends Component{
    state ={
        persons: [
            { name:'Vishal1', age:24, id: '1dede' },
            { name:'Aakash', age:21, id: '2ede' },
            { name:'Mauya', age:24,  id: 'hdge' },
        ],
        otherState :'other state',
        showState: false
    }
    switchNameHandler = (newName)=>{
        console.log('Clicked')
        this.setState ({
            persons: [
                { name: newName, age:27 },
                { name:'Aakash', age:21 },
                { name:'Mauya', age:24 },
            ],
        })
    }

    nameChangeHandler  = (event,id) =>{
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })

        const person = {
            ...this.state.persons[personIndex]
        }
        person.name = event.target.value

        const persons =[...this.state.persons]
        persons[personIndex] = person
        this.setState ({
            persons: persons
        })
    }
    togglePersonHAndler =() =>{
        const doesShow = this.state.showState
        this.setState({
            showState: !doesShow
        })
    }
    deletePersonHandler =(personIndex) =>{
        const persons = this.state.persons
        persons.splice(personIndex,1)
        this.setState({persons: persons})
    }
    render(){
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
        let persons = null
        if(this.state.showState){
            persons =(
                <div>
                    {this.state.persons.map((person,index) =>{
                        return(
                            <Persons
                            click = {() => this.deletePersonHandler(index)}
                            name = {person.name}
                            age = {person.age}
                            key = {person.id}
                            nameChange = {(event) => this.nameChangeHandler(event, person.id)}
                         />)
                    })}

                </div>
            )
            style.backgroundColor = 'red'
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }
        let classes =[]
        if(this.state.persons.length <= 2){
            classes.push('red')
        }
        if(this.state.persons.length <= 1){
            classes.push('bold')
        }


        return(
            <div className ="App">
                <p className ={classes.join(' ')}>This is working</p>
                <button style ={ style }onClick ={this.togglePersonHAndler }> Toggle Person </button>
                { persons}
            </div>
        );
    }
}
export default Radium(App)