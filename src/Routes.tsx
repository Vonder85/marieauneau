import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import HomeAdmin from "./Pages/Admin/HomeAdmin/HomeAdmin";
import { MassagesView } from "./Pages/Massages/MassagesView";
import { APropos } from "./Pages/APropos";
import { Offrir } from "./Pages/Offrir";
import { MassageDetail } from "./Pages/Massages/MassageDetail";
import { MassageForm } from "./Pages/Admin/HomeAdmin/Soins/NewMassage/MassageForm";
import { FAQ } from "./Pages/FAQ";
import { Contact } from "./Pages/Contact";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Connexion">
        <LoginPage />
      </Route>

      <Route exact path="/Massages">
        <MassagesView />
      </Route>
      <Route path="/Massages/:nom">
        <MassageDetail />
      </Route>
      <Route path="/APropos">
        <APropos />
      </Route>
      <Route path="/Offrir">
        <Offrir />
      </Route>
      <Route path="/FAQ">
        <FAQ />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/Admin">
        <HomeAdmin />
      </Route>
      <Route path="/Admin/Edition">
        <MassageForm />
      </Route>
    </Switch>
  );
}
export default Routes;
