import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  liens: {
    textDecoration: "none",
    color: "white",
    marginTop: "14px",
    fontSize: "35px",
  },
  root: {
    " & .MuiTypography-body1": {
      fontSize: "35px",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "0px",
    },
  },
});

var styles = {
  bmBurgerBars: {
    background: "#D19D8E",
  },
  bmBurgerBarsHover: {
    background: "#D19D8E",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#D19D8E",
    padding: "2.5em 1.5em 0",
    fontSize: "35px",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
interface MenuProps {
  open: boolean;
  onChange: (value: boolean) => void;
}
export const MenuNavbarResponsive = (props: MenuProps) => {
  const classes = useStyles();

  return (
    <>
      <Menu
        styles={styles}
        outerContainerId={"outer-container"}
        right
        width={"100%"}
        isOpen={props.open}
        className={classes.root}
      >
        <List>
          <ListItem>
            <Link to="/Massages" className={classes.liens}>
              <ListItemText
                primary={"Massages"}
                style={{ fontSize: "35px" }}
                onClick={() => {
                  props.onChange(false);
                }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/APropos" className={classes.liens}>
              <ListItemText
                primary="A propos"
                style={{ fontSize: "35px" }}
                onClick={() => {
                  props.onChange(false);
                }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/FAQ" className={classes.liens}>
              <ListItemText
                primary="FAQ"
                style={{ fontSize: "35px" }}
                onClick={() => {
                  props.onChange(false);
                }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/Contact" className={classes.liens}>
              <ListItemText
                primary="Contact"
                style={{ fontSize: "35px" }}
                onClick={() => {
                  props.onChange(false);
                }}
              />
            </Link>
          </ListItem>
        </List>
      </Menu>
    </>
  );
};
