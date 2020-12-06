import React from 'react';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
    <div className="Header">
      <div className="Header__logo">
      <h1 className="texts"> shola </h1>
      </div>
      <div className="Header__nav">
      <Nav />  
        {/*  <ul className="Nav__linkslinks">
        <li className="Nav__link">Home
        </li>
        <li className="Nav__link">
        Resume
        </li>
        <li className="Nav__link">
        Contact
        </li>
      </ul>
  */}
      </div>
      
    </div>
    <div className="Main">
      <div className="Main__hero">
        <h1 className="texts">Human-Centered Design for the Web with <span className="heart" role="img">💙</span> is what I do
        </h1>
        <button className="hero__button">What can shola do for me??</button>
      </div>
    </div>
    </div>
  );
}

export default App;
