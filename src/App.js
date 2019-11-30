import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import notFound from "./components/pages/notFound";

import GithubState from "./context/context/github/Github.state";
import AlertState from "./context/context/alert/AlertState";
import "./App.css";
import PageContent from "../src/components/layout/pageContent";
const App = () => {
  return (
    <GithubState>
      <PageContent>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Alert />
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
                  <Route component={notFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </PageContent>
    </GithubState>
  );
};

export default App;
