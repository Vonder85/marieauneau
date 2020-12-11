import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//Pages
import { Home } from "./Pages/Home/Home";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import HomeAdmin from "./Pages/Admin/HomeAdmin/HomeAdmin";
import { MassagesView } from "./Pages/Massages/MassagesView";
import { APropos } from "./Pages/APropos";
import { Offrir } from "./Pages/Offrir";
import { MassageDetail } from "./Pages/Massages/MassageDetail";
import { FAQ } from "./Pages/FAQ";
import { Contact } from "./Pages/Contact";
import Dashboard from "./Pages/Admin/HomeAdmin/Dashboard";

//Context
import MassageContext from "./Components/Context/MassageContext";

//Service
import AvisService from "./Components/Services/AvisService";
import MessageService from "./Components/Services/MessageService";
import QuestionService from "./Components/Services/QuestionService";
import ImageService from "./Components/Services/ImageService";
import MassageService from "./Components/Services/MassageService";

function Routes() {
  const context = useContext(MassageContext);

  useEffect(() => {
    MassageService.getMassages().then((result) => {
      context.setMassages(result);
    });
    ImageService.getImages("Carousel").then((result) =>
      context.setImagesCarousel(result)
    );
    AvisService.getAvis().then((result) => {
      context.setAvis(result);
    });
    MessageService.getMessages().then((result) => {
      context.setMessages(result);
    });
    QuestionService.getQuestions().then((result) =>
      context.setQuestions(result)
    );
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

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
      <Route path="/Admin/Dashboard">
        <Dashboard />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}
export default Routes;
