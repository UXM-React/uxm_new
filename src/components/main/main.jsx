import React from "react";
import { Switch, Route } from "react-router-dom";
import InputMobile from "../inputgroup/input_mobile";
import InputEmail from "../inputgroup/input_email";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/mobile" component={InputMobile} />
      <Route exact path="/email" component={InputEmail} />
    </Switch>
  </main>
);

export default Main;
