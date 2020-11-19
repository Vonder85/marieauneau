import React, { useContext, useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Home } from "./Pages/Home/Home";
import VerticalTabs from "./Pages/Admin/HomeAdmin/HomeAdmin";
import { Massage } from "./Models/Massage";
import MassageContext from "./Components/Context/MassageContext";

export const App = () => {
  const context = useContext(MassageContext);
  const [massage, setMassage] = useState<Massage>(context.massage);
  const [massages, setMassages] = useState<Massage[]>(context.massages);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <MassageContext.Provider
          value={{
            massage,
            massages,
            setMassage,
            setMassages,
          }}
        >
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Route path="/Connexion">
            <LoginPage />
          </Route>

          <Route exact path="/Admin" component={VerticalTabs} />
        </MassageContext.Provider>
      </Router>
    </div>
  );
};

export default App;
