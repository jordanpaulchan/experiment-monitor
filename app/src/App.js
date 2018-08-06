import React, { PureComponent, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Loader } from "./components/Loader";

import HomeHeader from "./components/home/HomeHeader";
import CaseHeader from "./components/case/CaseHeader";
import CaseAside from "./components/case/CaseAside";

const Home = Loader("./home/Home");
const Case = Loader("./case/Case");
const CasePatient = Loader("./case/CasePatient");
const NotFound = Loader("./error/NotFound");

class App extends PureComponent {
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
          <aside>
            <Switch>
              <Route path="/case" component={CaseAside} />
            </Switch>
          </aside>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/case" component={Case} />
              <Route exact path="/case/patient" component={CasePatient} />
              <Route exact path="/case/setup" component={CasePatient} />
              <Route exact path="/case/equipment" component={CasePatient} />
              <Route exact path="/case/data" component={CasePatient} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;
