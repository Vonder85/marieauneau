import {
  AppBar,
  createStyles,
  Grid,
  ListItemText,
  makeStyles,
  MenuItem,
  Tab,
  Tabs,
  Theme,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//Images / icons
import Logo from "../../Images/logo.png";

//context
import MassageContext from "../Context/MassageContext";

//models
import { Massage } from "../../Models/Massage";

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
    menuBurger: {
      width: "50px",
    },
  })
);

export const Navbar = () => {
  const classes = useStyles();
  const context = useContext(MassageContext);

  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  //const user = firebase.auth().currentUser;
  /*function logout() {
    firebase.auth().signOut();
  }*/

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const urlCarteMassages =
    "https://firebasestorage.googleapis.com/v0/b/marieauneau-94c13.appspot.com/o/carteMassages.pdf?alt=media&token=7b11e86e-fe8d-4c59-ac28-e0ef73cec69f";
  return (
    <Grid container>
      <AppBar
        style={{
          background: "#D19D8E",
          alignItems: "center",
          position: "fixed",
        }}
        onMouseLeave={handleClose}
      >
        <Toolbar>
          {!smScreen ? (
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
                {context.massages.map((massage: Massage) => (
                  <Link
                    to={`/Massages/${massage?.nom}`}
                    className={classes.liens}
                  >
                    <StyledMenuItem key={massage.id} onClick={handleClose}>
                      <ListItemText secondary={massage.nom} />
                    </StyledMenuItem>
                  </Link>
                ))}

                <StyledMenuItem onClick={handleClose}>
                  <a
                    href={urlCarteMassages}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.liens}
                  >
                    <ListItemText secondary="Carte des massages" />
                  </a>
                </StyledMenuItem>

                <Link to={`/Offrir`} className={classes.liens}>
                  <StyledMenuItem onClick={handleClose}>
                    <ListItemText secondary="Bon cadeau" />
                  </StyledMenuItem>
                </Link>
              </StyledMenu>
              <Link to="/APropos" className={classes.liens}>
                <Tab label="A propos" />
              </Link>
              <Link to="/Offrir" className={classes.liens}>
                <Tab label="Offrir" />
              </Link>
              <Link to="/">
                <img src={Logo} alt="logo" className={classes.logo} />
              </Link>

              <Link to="/FAQ" className={classes.liens}>
                <Tab label="FAQ" />
              </Link>
              <Link to="/Contact" className={classes.liens}>
                <Tab label="Contact" />
              </Link>

              <Link to="/Admin" className={classes.liens}>
                <Tab label="Admin" />
              </Link>
            </Tabs>
          ) : (
            <>
              <Typography>
                <Link to="/">
                  <img src={Logo} alt="logo" className={classes.logo} />
                </Link>
              </Typography>
            </>
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
