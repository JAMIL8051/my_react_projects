import './App.css';
import { useState, useEffect } from 'react';

// const Person =(props) =>{
//   return (
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>Last Name: {props.lastname}</h2>
//     <h3>Age: {props.age}</h3>
//     </>
//   )
// }

const  App = () => {
  const [counter, setCounter] = useState(0); //react-hook

  useEffect(() => {
      alert("You've changed the counter to " + counter);

  }, [counter]);
  //const name = 'Jamil';
  //const isNameShowing = true;
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
      {/* <Person 
      name='John' 
      lastname='Doe' 
      age='25' 
      />
      
      <Person 
      name='Mary' 
      lastname='Doe' 
      age='25' 
      /> */}

      {/* <h1>Hello, { 2+ 2}!</h1>
      {
      name ? (
        <>
        <h1>{name}</h1>
        </>
      ):(
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>)
      } */}
    </div>
  );
}

export default App;
