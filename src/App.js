import React, { Component } from 'react';
import './App.css';
import Kareem from './Person/Person';
import Info from './Info';

class App extends Component {
  state = {
    persons: [
      {name: 'ahmed', age: 7},
      {name:'heba', age: 14},
      {name: 'kareem', age: 16}
    ],
    showitems: false
  };

  switchNameHandler = (newname) =>{
     console.log('you clicked me !!');
    this.setState({
      persons: [
        {name: newname, age: 8},
        {name:'heba', age: 14},
        {name: 'kareem', age: 17}
      ]
    });
  }
  typename = (event) =>{
    this.setState({
      persons: [
        {name: 'ahmed', age: 7},
        {name:  event.target.value, age: 14},
        {name: 'kareem', age: 16}
      ]
    });
  }
  toggleShow = () =>{
    // console.log('Hide');
    let itemStatus = this.state.showitems;
    this.setState({showitems: !itemStatus});

    // console printing
    /*
    if (itemStatus === true) {
      console.log('Hide');
    }else {
      console.log('Show');
    }*/
  }
// styling the button from the class so i didn't need to right const or var or let
  buttonStyleOne = {
    backgroundColor: '#fff',
    font: 'inherit',
    border: '1px solid #DDD',
    borderRadius: '5px',
    padding: '10px',
    margin: '0 5px 0 0',
    cursor: 'pointer'
  };

  render() {
    const buttonStyleTwo = {
      backgroundColor: '#DDD',
      font: 'inherit',
      border: '1px solid #DDD',
      borderRadius: '5px',
      padding: '10px',
      margin: '0 0 0 5px',
      cursor: 'pointer'
    }

    let rendering = null;
    if (this.state.showitems){
      rendering = (
        <div>
          <Kareem
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            clicky={this.switchNameHandler.bind(this, 'ahmed Salem')}><span>This is a span in a div</span></Kareem>
          <Kareem
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changey={this.typename}><span>This is a span in a div</span></Kareem>
          <Kareem
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}><span>This is a span in a div</span></Kareem>
          <Kareem/>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello World. How Are You?</h1>
        <button onClick={this.toggleShow} style={this.buttonStyleOne}>Toggle items</button>
        <button onClick={this.switchNameHandler.bind(this, 'ahmed idiot')} style={buttonStyleTwo}>Swith name</button>

        {rendering}

        <hr/>
        <Info name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <hr/>
        <div className='l-capital'>{this.state.persons[2].name}</div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work know??'));
  }
}

export default App;
