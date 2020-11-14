import React, { useContext, useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Home } from "./Pages/Home/Home";
import firebase from "./FirebaseConfig";
import VerticalTabs from "./Pages/Admin/HomeAdmin/HomeAdmin";
import SoinContext from "./Pages/Admin/HomeAdmin/SoinContext";
import { Soin } from "./Models/Soin";

export const App = () => {
  const firebaseAuth = firebase.auth().currentUser;

  const context = useContext(SoinContext);
  const [soin, setSoin] = useState<Soin>(context.soin);
  const [soins, setSoins] = useState<Soin[]>(context.soins);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Route path="/Connexion">
          <LoginPage />
        </Route>
        <SoinContext.Provider
          value={{
            soin,
            soins,
            setSoin,
            setSoins,
          }}
        >
          <Route exact path="/Admin" component={VerticalTabs} />
        </SoinContext.Provider>
      </Router>
    </div>
  );
};

export default App;
