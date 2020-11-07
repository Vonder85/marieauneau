import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Home } from "./Pages/Home/Home";
import firebase from "./FirebaseConfig";
import VerticalTabs from "./Pages/Admin/HomeAdmin/HomeAdmin";

const firebaseAuth = firebase.auth().currentUser;

function App() {
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
        <Route exact path="/Admin" component={VerticalTabs} />
      </Router>
    </div>
  );
}

export default App;
