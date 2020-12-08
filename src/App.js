import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import Resume from "./Resume";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Header__logo">
          <p className="my__name">call me</p>
          <h1 className="texts"> shola </h1>
        </div>
        <div className="Header__nav">{/* <Nav />   */}</div>
      </div>
      <Router>
        <div>
          <nav className="nav">
            <ul className="nav__links">
              <li className="nav__link">
                <NavLink 
                exact
                className="link" activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav__link">
                <NavLink
                  className="link"
                  activeClassName="active"
                  to="/Contact"
                >
                  Contact me
                </NavLink>
              </li>
              <li className="nav__link">
                <NavLink className="link" activeClassName="active" to="/Resume">
                  Resume
                </NavLink>
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
