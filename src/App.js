import React, { Component } from 'react';
import './App.css';
import Radium from "radium";
import Person from "./Person/Person";
import UserOutput from "./Task/UserOutput";
import UserInput from "./Task/UserInput";
import ErrorBoundary from "../src/ErrorBoundaries/ErrorBoundary"

class App extends Component {
  state = {
    persons : [
      {name:"Fulano", age:30, id:1},
      {name:"Ciclano", age:29 ,id:2},
      {name:"Beltrano", age:28,id:3},
      
    ],
    otherState:"just a string",
    taskState :"bufus",
    showPersons:false,
  }

  deletePersonHandler = (personIndex) =>{
    const pessoas = this.state.persons.slice();
    // const pessoas = [...this.state.persons]
    pessoas.splice(personIndex,1);
    this.setState({
      persons:pessoas
    })
  }

  nameChangedHandler = (event, id) =>{
    const humanIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const human = {...this.state.persons[humanIndex]};
    human.name = event.target.value;
    const pessoas = [...this.state.persons];
    pessoas[humanIndex] = human;
    this.setState({
      persons:pessoas,
    })
  }

  taskNameChangedHandler = (event) => {
    this.setState({
      taskState:event.target.value,
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    })

  }

  render() {

    const style = {
      backgroundColor:"green",
      color:"white",
      font:"inherit",
      border: "1px solid blue",
      padding:"8px",
      cursor:"pointer",
      boxShadow:"1px 1px grey",
      ":hover":{
        backgroundColor:"lightgreen",
        color:"black",
        transform:"scale(1.03)",
      },
      
      
    }

    let person = null;
    if(this.state.showPersons){
      person = (
        <div className = "person-wrapper">

              {this.state.persons.map((pessoa, index) => {
                          
                          return <ErrorBoundary key = {pessoa.id} > 
                          <Person 
                          name = {pessoa.name} 
                          age = {pessoa.age}
                          click = {this.deletePersonHandler.bind(this,index)}
                          //changed = {this.nameChangedHandler.bind(this, event, pessoa.id)}/>
                          changed = {(event) => {this.nameChangedHandler(event,pessoa.id)}} />
                      </ErrorBoundary>  
              })}
             
          </div> 
      );
      style.backgroundColor = "red";
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push("red");
    };
    if(this.state.persons.length <= 1){
      classes.push("bold");
    }

    return (
      <div className="App">
          <h1>Hello world app</h1>
          <p className = {classes.join(" ")}>Pessoas na lista</p>
          <button
             style = {style}
             onClick = {this.togglePersonsHandler} >
                Toggle Names
          </button>

          {person}

            


          {/* <UserInput changed = {this.taskNameChangedHandler}
                     taskName = {this.state.taskState}>

          </UserInput>

          <UserOutput t1="texto gerado ao acaso" t2="sapo" name={this.state.taskState}>

          </UserOutput> */}


      </div>
    );
  }
}

export default Radium(App);
