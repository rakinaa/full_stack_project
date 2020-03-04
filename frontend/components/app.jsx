import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Splash from "./splash";
import ModalContainer from "./modal/modal";

const App = () => (
  <div>
    <ModalContainer />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;