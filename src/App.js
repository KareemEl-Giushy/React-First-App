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
    ]
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
  render() {
    return (
      <div className="App">
        <h1>Hello World. How Are You?</h1>
        <button onClick={() => this.switchNameHandler('ahmed idiotaaa!!')}>Swith the name to idiontaaa!!</button>
        <button onClick={this.switchNameHandler.bind(this, 'ahmed idiot')}>Swith name</button>
        <Kareem
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          clicky={this.switchNameHandler.bind(this, 'ahmed Salem')}><span>This is a span in a div</span></Kareem>
        <Kareem
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}><span>This is a span in a div</span></Kareem>
        <Kareem
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}><span>This is a span in a div</span></Kareem>
        <Kareem/>
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
