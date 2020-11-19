import {
  AppBar,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import Logo from "../../Images/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    liens: {
      textDecoration: "none",
      color: "rgba(255, 255, 255, 0.8)",
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      float: "left",
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      width: "80px",
    },
  })
);

export const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState<boolean>(false);

  firebase.auth().onAuthStateChanged(function (User) {
    if (User) {
      setUser(true); // User is signed in.
    } else {
      setUser(false);
    }
  });
  //const user = firebase.auth().currentUser;
  function logout() {
    firebase.auth().signOut();
  }

  return (
    <Grid container>
      <AppBar
        position="static"
        style={{ background: "#D19D8E", alignItems: "center" }}
      >
        <Toolbar style={{ marginLeft: "190px" }}>
          <Tabs>
            <Tab label="Les massages" />
            <Tab label="A propos" />
            <Link to="/">
              <img src={Logo} alt="logo" className={classes.logo} />
            </Link>

            <Tab label="Contact" />
            <Tab label="Autre" />
          </Tabs>
          {user && (
            <Button color="inherit">
              <Link to="/Admin" className={classes.liens}>
                Admin
              </Link>
            </Button>
          )}
          {/*<Button color="inherit">
            {user ? (
              <Link to="/" className={classes.liens} onClick={logout}>
                Déconnexion
              </Link>
            ) : (
              <Link to="/Connexion" className={classes.liens}>
                Connexion
              </Link>
            )}
            </Button>*/}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
