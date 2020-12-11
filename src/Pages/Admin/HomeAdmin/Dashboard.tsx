import React from "react";
import { Route, useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

//Components
import { ListeSoins } from "./Soins/ListeMassages/ListeMassages";
import { ListeAvis } from "./Avis/ListeAvis";
import { ListeMessages } from "./Messages/ListeMessages";
import { LectureMessage } from "./Messages/LectureMesssage";
import { AvisForm } from "../../../Components/Forms/AvisForm";
import { MassageForm } from "./Soins/NewMassage/MassageForm";
import { ListeImagesCarousel } from "./ImagesCarousel/ListeImagesCarousel";
import { ListeQuestions } from "./Questions/ListeQuestions";
import { QuestionForm } from "../../../Components/Forms/QuestionForm";

const drawerWidth = 120;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export interface TabsItem {
  label?: string;
  route: string;
  render?: any;
  exact?: boolean;
  showOnMenu: boolean;
}

export default function Dashboard(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const tabsItems: TabsItem[] = [
    {
      label: "Massage",
      showOnMenu: false,
      route: "/Admin/Dashboard/Massages/Edition",
      exact: true,
      render: MassageForm,
    },
    {
      label: "Massage",
      showOnMenu: false,
      route: "/Admin/Dashboard/Massages/Edition/:nom",
      exact: true,
      render: MassageForm,
    },
    {
      label: "Massages",
      showOnMenu: true,
      route: "/Admin/Dashboard/Massages",
      exact: true,
      render: ListeSoins,
    },
    {
      label: "Avis",
      showOnMenu: false,
      route: "/Admin/Dashboard/Avis/Edition/:id",
      exact: true,
      render: AvisForm,
    },
    {
      label: "Avis",
      showOnMenu: false,
      route: "/Admin/Dashboard/Avis/Edition/",
      exact: true,
      render: AvisForm,
    },
    {
      label: "Avis",
      showOnMenu: true,
      route: "/Admin/Dashboard/Avis",
      exact: true,
      render: ListeAvis,
    },

    {
      label: "Messages",
      showOnMenu: false,
      route: "/Admin/Dashboard/Messages/:id",
      exact: true,
      render: LectureMessage,
    },
    {
      label: "Messages",
      showOnMenu: true,
      route: "/Admin/Dashboard/Messages",
      exact: true,
      render: ListeMessages,
    },
    {
      label: "Carousel",
      showOnMenu: true,
      route: "/Admin/Dashboard/Carousel",
      exact: true,
      render: ListeImagesCarousel,
    },
    {
      label: "Questions",
      showOnMenu: false,
      route: "/Admin/Dashboard/Questions/Edition/:id",
      exact: true,
      render: QuestionForm,
    },
    {
      label: "Questions",
      showOnMenu: false,
      route: "/Admin/Dashboard/Questions/Edition",
      exact: true,
      render: QuestionForm,
    },
    {
      label: "Questions",
      showOnMenu: true,
      route: "/Admin/Dashboard/Questions",
      exact: true,
      render: ListeQuestions,
    },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {tabsItems
          .filter((item) => item.showOnMenu)
          .map((item, index) => (
            <ListItem button key={index}>
              <ListItemText
                primary={item.label}
                onClick={() => history.push(item.route)}
              />
            </ListItem>
          ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {tabsItems.map((item) => {
          return (
            <Route
              key={item.label}
              path={item.route}
              exact={item.exact}
              component={() => React.createElement(item.render, {})}
            />
          );
        })}
      </main>
    </div>
  );
}
