import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';

class App extends Component {

  state = {
    persons : [
      { id: 'aaa' ,name: 'Andrew', age: 23},
      { id: 'bbb',name: 'Stuart', age: 13},
      { id: 'ccc',name: 'Bran', age: 53}
    ],
    otherState: 'some other value',
    showPerons: false,
    userInput:''

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); below is the modern approach to
    // to copy an array into a new one before manulipulating it
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons :persons})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // using the spread operator
    const person = {
      ...this.state.persons[personIndex]
    };
    // alternative method below for the above three lines of code
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    // fetching the array to be updated
    const persons = [...this.state.persons];
    // at one position
    persons[personIndex] = person;

    this.setState({persons : persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerons;
    this.setState({showPerons: !doesShow});
  };
  /*
    * the Assingment method will be bellow to the  next stars
    *
    * */


  inputUserNameHandler = (event) => {
    this.setState({userInput: event.target.value})
  };







  /*****************************************************************/



  render() {

    // different way to add style other than creating a new css file
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
        };
    //// map() allows on arrays , to match your array into an array of jsx elements
    // need key to let react update everything effectively
    let persons =null;
    if(this.state.showPerons){
      persons = (
          <div>

            {this.state.persons.map((person, index) => {
              return <Person
                  click={ () => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  // used with the ID from the database
                key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })}

          </div>

      );
    }

    return (
      <div className="App">
      <h1> Hi, im yeeting with react now</h1>
          <p> This is really working!</p>
        <button style={style}
            className=""
                onClick={this.togglePersonsHandler}>Toggle persons</button>
        <div className="Box">
            {persons}
        </div>

        <input type="text"
               onChange={this.inputUserNameHandler}
                  value={this.state.userInput}
        />
        <p>
          {this.state.userInput}
        </p>
        <Validation inputLength={this.state.userInput.length}/>

      </div>
    );

  }
}

export default App;
