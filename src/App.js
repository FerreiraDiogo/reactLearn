import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import UserOutput from "./Task/UserOutput";
import UserInput from "./Task/UserInput";

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
      backgroundColor:"white",
      font:"inherit",
      border: "1px solid blue",
      padding:"8px",
      cursor:"pointer",
    }

    let person = null;
    if(this.state.showPersons){
      person = (
        <div>

              {this.state.persons.map((pessoa, index) => {
                return <Person 
                          name = {pessoa.name} 
                          age = {pessoa.age}
                          click = {this.deletePersonHandler.bind(this,index)}
                          key = {pessoa.id}
                          //changed = {this.nameChangedHandler.bind(this, event, pessoa.id)}/>
                          changed = {(event) => {this.nameChangedHandler(event,pessoa.id)}} />
              })}
             
          </div> 
      )
    }

    return (
      <div className="App">
          <h1>Hello world app</h1>

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

export default App;
