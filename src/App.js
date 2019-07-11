import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name: 'Andrew', age: 23},
      {name: 'Stuart', age: 13},
      {name: 'Bran', age: 53}
    ],
    otherState: 'some other value',
    showPerons: false
  }
  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // dont do this !! :this.state.persons[0].name = 'Andy'

    this.setState({persons : [
        {name: newName, age: 63},
        {name: 'james', age: 73},
        {name: 'kev', age: 83}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({persons : [
        {name: 'Mia', age: 63},
        {name: event.target.value, age: 73},
        {name: 'kev', age: 83}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerons;
    this.setState({showPerons: !doesShow});
  }

  render() {

    // different way to add style other than creating a new css file
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
        };
    //
    return (
      <div className="App">
      <h1> Hi, im yeeting with react now</h1>
          <p> This is really working!</p>
        <button style={style}
            className=""
                onClick={() => this.togglePersonsHandler()}>Toggle persons</button>

        {
          this.state.showPerons === true ?
          <div>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'YETTTTT')}
              changed={this.nameChangedHandler}>
            My Hobbies : licking</Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}/>
        </div> : null
        }

      </div>
    );
    // the code above gets compiled to the code below
   /* return React.createElement('div' , {className : 'App'},
        React.createElement('h1', null, 'hey im react') )*/
  }
}

export default App;
