import { makeStyles, MobileStepper, useTheme } from "@material-ui/core";
import React, { useContext } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import MassageContext from "../Context/MassageContext";
import { ContenantAvis } from "./ContenantAvis";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
  avis: {
    display: "flex",
    justifyContent: "space-around ",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },

  root: {
    maxWidth: "100%",
    flexGrow: 1,
    height: "100%",
  },
  stepper: {
    justifyContent: "center",
    backgroundColor: "white",
    "& .MuiMobileStepper-dotActive": {
      backgroundColor: "#D19D8E",
    },
  },
});

export const AffichageAvis = () => {
  const classes = useStyles();

  /**
   * Récupération du context
   */
  const context = useContext(MassageContext);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const theme = useTheme();

  return (
    <>
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {context.avis?.map((_avis) => (
            <div className={classes.avis}>
              <ContenantAvis avis={_avis} key={_avis.id} />
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={context.avis.length}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={undefined}
          backButton={undefined}
          className={classes.stepper}
        />
      </div>
    </>
  );
};
