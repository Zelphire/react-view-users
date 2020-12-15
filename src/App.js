import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
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
