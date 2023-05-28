import { useState } from 'react';
import './App.css';
// import Person from './Person/Person'
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

function App() {

  const [state, setState] = useState({
      persons: [
      { name: "Adarsh", age: 23 },
      { name: "Sargun", age: 22 },
      { name: "Alex", age: 25 },
      { name: "Sophie", age:24 }
    ],
    otherState: "some other value"
    }
  )

  // console.log(state);

  const switchNameHandler = () => {
    setState({
      persons: [
        { name: "Sargun", age: 22 },
        { name: "Adarsh", age: 23 },
        { name: "Sophie", age: 25 },
        { name: "Alex", age:21 }
      ],
      otherState: state.otherState
    })
  }

  const nameChangedHandler = (event) => {
    setState({
      persons: [
      { name: "Adarsh", age: 23 },
      { name: "Sargun", age: 22 },
      { name: event.target.value, age: 24 },
      { name: "Sophie", age:21 }
      ],
      otherState: state.otherState
    })
  }

  // const style = {
  //   backgroundColor: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer'
  // };

  return (
    
    <div className="App">
      < UserOutput 
        userName = { state.persons[0].name }
      />
      < UserOutput 
        userName = { state.persons[1].name }
        chnageName = { switchNameHandler }
      />
      < UserOutput 
        userName = { state.persons[2].name }
      />

      < UserInput 
        eventHandler = { nameChangedHandler }
      />

      {/* <h1>Hello from React App</h1>
      <p>This is really working</p>
      <button 
        style={ style }
        onClick={ () => switchNameHandler("Alex")}
      >Switch Name</button>
      <Person 
        name={state.persons[0].name} 
        age={state.persons[0].age}
      />
      <Person 
        name={state.persons[1].name} 
        age={state.persons[1].age}
        click = { switchNameHandler }
        changed = { nameChangedHandler }
      />
      <Person 
        name={state.persons[2].name} 
        age={state.persons[2].age}
      >My hobbies are coding, swimming, martial arts
      </Person> */}
    </div>
  );
}

export default App;
