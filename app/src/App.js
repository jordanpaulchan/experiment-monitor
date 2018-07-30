import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Loader } from "./components/Loader";

import HomeHeader from "./components/home/HomeHeader";
import CaseHeader from "./components/case/CaseHeader";

const Home = Loader("./home/Home");
const Case = Loader("./case/Case");
const NotFound = Loader("./error/NotFound");

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <header>
            <Switch>
              <Route exact path="/" component={HomeHeader} />
              <Route path="/case" component={CaseHeader} />
            </Switch>
          </header>
          <main style={{ marginTop: "7em" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/case" component={Case} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;
