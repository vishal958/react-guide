import React ,{ Component } from "react";
import './App.css'
import Persons from '../components/Persons/Persons'
import Radium from 'radium'
import Cockpit from '../components/Cockpit/Cockpit'

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

    constructor(props){
        super(props)
        console.log('App js constructor')
    }

    state ={
        persons: [
            { name:'Vishal1', age:24, id: '1dede' },
            { name:'Aakash', age:21, id: '2ede' },
            { name:'Mauya', age:24,  id: 'hdge' },
        ],
        otherState :'other state',
        showState: false
    }

    static getDerivedStateFromProps(props,state){
        console.log('App js Derived state from Props',props)
        return state
    }

    // componentWillMount(){
    //     console.log('App.js component will mount')
    // }

    componentDidMount(){
       console.log('App.js component did mount')
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
        console.log('App.js render')
        let persons = null
        if(this.state.showState){
            persons =(
                <div>
                    <Persons
                        persons ={this.state.persons}
                        clicked ={this.deletePersonHandler}
                        changed ={this.nameChangeHandler}
                    />
                </div>
            )
        }
        return(
            <div className ="App">
                <Cockpit
                    title = { this.props.appTitle }
                    clicked = {this.togglePersonHAndler}
                    showPersons = {this.state.showState}
                    persons ={ this.state.persons }
                />
                { persons}
            </div>
        );
    }
}
export default Radium(App)