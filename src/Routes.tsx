import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
import MassageService from "./Components/Services/MassageService";
import MassageContext from "./Components/Context/MassageContext";
function Routes() {
  const context = useContext(MassageContext);

  useEffect(() => {
    MassageService.getMassages().then((result) => {
      context.setMassages(result);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Switch>
      <Route exact path="/Home">
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
      <Route exact path="/Admin/Edition">
        <MassageForm />
      </Route>
      <Route path="/Admin/Edition/:nom">
        <MassageForm />
      </Route>
      <Redirect to="/Home" />
    </Switch>
  );
}
export default Routes;
