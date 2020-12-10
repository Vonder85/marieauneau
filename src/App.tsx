import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createMuiTheme,
  makeStyles,
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
import { Footer } from "./Pages/Footer";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "cursive"].join(","),
  },
});

const useStyles = makeStyles({
  App: {
    fontFamily: theme.typography.fontFamily,
    textAlign: "justify",
  },
});

export const App = () => {
  const classes = useStyles();
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
      <div className={classes.App}>
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
            <Footer />
            {smScreen && <AppbarMobile />}
          </MassageContext.Provider>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
