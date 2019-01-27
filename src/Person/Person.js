import React from 'react';
const person = (props) => {
  return (
    <div>
      <h2 onClick={props.clicky}>I'm {props.name} and I'm {hamada()} years old. my real age is {props.age}</h2>
      <div>{props.children}</div>
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
