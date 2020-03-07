import React from "react";
import { Switch, Route } from "react-router-dom";

import { StartProvider } from "./Contexts/StartContext";
import Home from "./Pages/Home";
import BuyingStage from "./Pages/BuyingStage";
import Finances from "./Pages/Finances";
import StartSummary from "./Pages/StartSummary";

function App() {
  return (
    <StartProvider>
      <Switch>
        <Route path="/intro/finances">
          <Finances />
        </Route>
        <Route path="/intro/buying">
          <BuyingStage />
        </Route>
        <Route path="/intro/summary">
          <StartSummary />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </StartProvider>
  );
}

export default App;
