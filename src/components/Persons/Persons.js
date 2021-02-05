import React,{Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{

    // static getDerivedStateFromProps(props,state){
    //     console.log('Persons.js Derived state from Props',props)
    //     return state
    // }

    shouldComponentUpdate(nextProps, nextSate){
        //1
        console.log('Persons.js shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        //3
        console.log('Persons.js getSnapshotBeforeUpdate')
        return { message : 'Snapshot'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        //4
        console.log('Persons.js componentDidUpdate')
        console.log(snapshot)
    }

    render(){
        //2
        console.log('Persons.js  rendering')
        return this.props.persons.map((person,index) =>{
            return(
                <Person
                click = {() => this.props.clicked(index)}
                name = {person.name}
                age = {person.age}
                key = {person.id}
                nameChange = {(event) => this.props.changed(event, person.id)}
             />)
        })
    }
}

export default Persons
