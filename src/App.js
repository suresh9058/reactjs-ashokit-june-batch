import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'; 
import React, {useState, useEffect} from 'react';
import Greeter from './Greeter';
import Greeting, {UserGreeting, GuestGreeting} from './Greeting';
import ReactEvents from './ReactEvents';
import ListExample from './ListExample';
import ListExample2 from './ListExample2';
import UseStateExample from './UseStateExample';
import UseStateExample2 from './UseStateExample2';
import UseEffectExample from './UseEffectExample';
import UseEffectExample2 from './UseEffectExample2';
import ChildParent from './ChildParent';

function App() {

  const data = {
    name:"fgsdgdsg",
    age:31,
    title: "dgsdgsdg",
    subtitle:"dgsgfdg",
    admin: true
  }

  const users = [
    // {
    //   id:123,
    //   name:"rakesh",
    //   email:"rakesh@gmail.com"
    // },
    // {
    //   id:124,
    //   name:"manvith",
    //   email:"manvith@gmail.com"
    // },
    // {
    //   id:125,
    //   name:"krishna",
    //   email:"krishna@gmail.com"
    // }
  ];
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
        {/* <Greeter name="reactjs" admin> */}
            {/* <span>this is the child component of Greeter component</span> */}
        {/* </Greeter> */}
        {/* <Greeter name={data.name} age={data.age} admin={data.admin} /> */}
        {/* <Greeter {...data} /> */}
        {/* <Greeter name="reactjs" admin/> */}
        {/* <Greeter name="world2" age="32" admin date={new Date()}/> */}
        {/* <Greeting isLoggedIn={false}/> */}
        {/* <ReactEvents /> */}
        {/* <ListExample numbers={[1,2,3,4,5]}/> */}
        {/* <ListExample2 users={users}/> */}
        {/* <UseStateExample2/> */}
        {/* <UseStateExample /> */}
        {/* <UseEffectExample /> */}
        {/* <UseEffectExample2 name="useEffect props"/> */}
        {/* <ChildParent /> */}
        <UseEffectExample2 />
      </header>
    </div>
  );
}

export default App;
