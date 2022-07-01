import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'; 
import React from 'react';
import Greeter from './Greeter';

function App() {

  const data = {
    name:"fgsdgdsg",
    age:31,
    title: "dgsdgsdg",
    subtitle:"dgsgfdg",
    admin: true
  }
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
        <Greeter name="reactjs" admin>
            <span>this is the child component of Greeter component</span>
        </Greeter>
        {/* <Greeter name={data.name} age={data.age} admin={data.admin} /> */}
        {/* <Greeter {...data} /> */}
        {/* <Greeter name="reactjs" admin/> */}
        {/* <Greeter name="world2" age="32" admin date={new Date()}/> */}
      </header>
    </div>
  );
}

export default App;
