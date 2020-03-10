import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameDisplay from './NameDisplay';

let myStudent = {
  name : 'Mary',
  grade : 90,
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Isn't React Just The Best</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/MaryHooker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Github!
        </a>
        <NameDisplay userName = 'Mary' lname = 'Hooker' comment = "... You're the best...not react." studentObject = {myStudent} ></NameDisplay>
      </header>
    </div>
  );
}

export default App;
