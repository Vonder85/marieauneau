import {
  AppBar,
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";

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
  console.log(user);
  function logout() {
    firebase.auth().signOut();
  }

  return (
    <Grid container>
      <AppBar position="static" style={{ background: "#DB997E" }}>
        <Toolbar>
          <Grid item md={4}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Logo</Link>
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Tabs>
              <Tab label="Les soins" />
              <Tab label="A propos" />
              <Tab label="Contact" />
              {user && (
                <Button color="inherit">
                  <Link to="/Admin" className={classes.liens}>
                    <Tab label="Admin" />
                  </Link>
                </Button>
              )}
            </Tabs>
          </Grid>
          <Grid item md={1}>
            <Button color="inherit">
              {user ? (
                <Link to="/" className={classes.liens} onClick={logout}>
                  Déconnexion
                </Link>
              ) : (
                <Link to="/Connexion" className={classes.liens}>
                  Connexion
                </Link>
              )}
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
