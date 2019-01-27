import React from 'react';
import './Person.css';
const person = (props) => {
  // console.log(props);
  return (
    <div className='person'>
      <h2 onClick={props.clicky}>I'm {props.name} and I'm {hamada()} years old. my real age is {props.age}</h2>
      <div>{props.children}</div>
      <input type='text' onKeyUp={props.changey}/>
      <hr/>
    </div>);
}

const hamada = () =>{
  let x = Math.floor(Math.random() * 40);
  if (x === 0){
    return Math.floor(Math.random() * 40);
  }else {
    return x
  }
}

export default person;
