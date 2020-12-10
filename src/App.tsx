import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Routes from "./Routes";

//Models
import { Massage } from "./Models/Massage";
import { Avis } from "./Models/Avis";
import { Message } from "./Models/Message";

//Context
import MassageContext from "./Components/Context/MassageContext";

//Component
import { AppbarMobile } from "./Components/Navbar/AppbarMobile";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Dancing Script", "BillySignature", "cursive"].join(","),
  },
});

export const App = () => {
  const [massages, setMassages] = useState<Massage[]>([]);
  const [imagesCarousel, setImagesCarousel] = useState<
    firebase.storage.Reference[]
  >([]);
  const [avis, setAvis] = useState<Avis[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

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
              messages,
              setMessages,
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
