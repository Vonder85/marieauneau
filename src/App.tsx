import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Massage } from "./Models/Massage";
import MassageContext from "./Components/Context/MassageContext";
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Routes from "./Routes";
import { AppbarMobile } from "./Components/Navbar/AppbarMobile";
import { Avis } from "./Models/Avis";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["BillySignature", "cursive"].join(","),
  },
});

export const App = () => {
  const [massages, setMassages] = useState<Massage[]>([]);
  const [imagesCarousel, setImagesCarousel] = useState<string[]>([]);
  const [avis, setAvis] = useState<Avis[]>([]);

  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <MassageContext.Provider
            value={{
              massages,
              setMassages,
              imagesCarousel,
              setImagesCarousel,
              avis,
              setAvis,
            }}
          >
            <Navbar />

            <Routes />
            {smScreen && <AppbarMobile />}
          </MassageContext.Provider>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
