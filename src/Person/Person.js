import React from 'react'
import Radium from "radium"
import "./Person.css";

const person = (props) => {
    let rdn = Math.random();
    
    return(
        <div
         className = "Person" 
         >
            <p onClick = {props.click} className = "Person-p" >My name is {props.name} and im {props.age} years old</p>
            <p >{props.children}</p>
            <input type="text" onChange = {props.changed} value = {props.name}></input>
        </div>
    );
}

export default Radium(person);