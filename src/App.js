import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/users" render={() => <UserList />} />
          <Route exact path="/userInfo" render={() => <UserDetails />} />
          <Route render={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
