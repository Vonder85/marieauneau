import React, { useContext, useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Massage } from "./Models/Massage";
import MassageContext from "./Components/Context/MassageContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["BillySignature", "cursive"].join(","),
  },
});

export const App = () => {
  const context = useContext(MassageContext);
  const [massage, setMassage] = useState<Massage>(context.massage);
  const [massages, setMassages] = useState<Massage[]>(context.massages);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <MassageContext.Provider
            value={{
              massage,
              massages,
              setMassage,
              setMassages,
            }}
          >
            <Navbar />

            <Routes />
          </MassageContext.Provider>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
