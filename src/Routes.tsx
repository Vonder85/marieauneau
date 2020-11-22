import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import HomeAdmin from "./Pages/Admin/HomeAdmin/HomeAdmin";
import { MassagesView } from "./Pages/Massages/MassagesView";
import { APropos } from "./Pages/APropos";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Connexion">
        <LoginPage />
      </Route>
      <Route exact path="/Admin">
        <HomeAdmin />
      </Route>
      <Route exact path="/Massages">
        <MassagesView />
      </Route>
      <Route path="/APropos">
        <APropos />
      </Route>
    </Switch>
  );
}
export default Routes;
