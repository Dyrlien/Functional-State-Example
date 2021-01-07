//import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const App = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26}
        ]
        //otherState: 'some other value'
    });

    const [ otherState, setOtherState ] = useState({otherState: 'some other state'});

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        // console.log('Was clicked');
        //DONT DO THIS!!!  this.state.persons[0].name = 'Maximilian';
        setPersonsState({ persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27}
            ]
            //otherState: personsState.otherState
        } )
    }

        return(
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>Check this out</p>
                <button onClick={switchNameHandler}>Switch Name</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}><h3>My hobbies: Racing</h3></Person>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>suppern duppern</Person>
            </div>

        )
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))

}

export default App;

/*state = {
    persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
}*/

