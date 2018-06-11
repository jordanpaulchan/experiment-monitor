import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Loader } from "./components/Loader";

const Home = Loader("./Home");
const Settings = Loader("./Settings");
const NotFound = Loader("./NotFound");

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
