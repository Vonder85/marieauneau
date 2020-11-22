import {
  AppBar,
  Button,
  createStyles,
  Grid,
  ListItemText,
  makeStyles,
  MenuItem,
  Tab,
  Tabs,
  Theme,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import Menu, { MenuProps } from "@material-ui/core/Menu";

import Logo from "../../Images/logo.png";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={3}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "rgba(209, 157, 142, 0.6)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    liens: {
      textDecoration: "none",
      color: "rgba(255, 255, 255, 0.8)",
      marginTop: "14px",
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

  const libellesMassages: string[] = [
    "Relaxant",
    "Détox",
    "Stretching",
    "Kobi-do",
    "Gua sha",
    "Carte des soins",
    "Bon cadeau",
  ];

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <AppBar
        position="static"
        style={{
          background: "#D19D8E",
          alignItems: "center",
          position: "fixed",
        }}
        onMouseLeave={handleClose}
      >
        <Toolbar style={{ marginLeft: "190px" }}>
          <Tabs>
            <Link to="/Massages" className={classes.liens}>
              <Tab
                label="Les massages"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onMouseEnter={handleClick}
              />
            </Link>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {libellesMassages.map((libelle: string, index: number) => (
                <StyledMenuItem key={index}>
                  <ListItemText secondary={libelle} />
                </StyledMenuItem>
              ))}
            </StyledMenu>
            <Link to="/APropos" className={classes.liens}>
              <Tab label="A propos" />
            </Link>
            <Link to="/">
              <img src={Logo} alt="logo" className={classes.logo} />
            </Link>

            <Tab label="Contact" />
            <Tab label="Offrir" />
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
