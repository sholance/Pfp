import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Resume from './Resume';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <div className="Header">
      <div className="Header__logo">
      <h1 className="texts"> shola </h1>
      </div>
      <div className="Header__nav">
      <Nav />  

      </div>
      
    </div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Contact">Contact me</Link>
            </li>
            <li>
              <Link to="/Resume">My Resume</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
