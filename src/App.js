import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./context/context/github/Github.state";
import AlertState from "./context/context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <div>
                      <Search />
                      <Users />
                    </div>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={props => <User {...props} />}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
