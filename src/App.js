import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'; 
import React from 'react';
import Greeter from './Greeter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and reactjs first session
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome /> */}
        <Greeter name="world" age={31} admin={false} />
        <Greeter name="reactjs" admin/>
        <Greeter name="world2" age="32" admin date={new Date().getDate()}/>
      </header>
    </div>
  );
}

export default App;
