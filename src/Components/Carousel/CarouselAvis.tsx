import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

//Model
import { Avis } from "../../Models/Avis";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
  root: {
    maxWidth: "60%",
    flexGrow: 1,
    marginRight: "auto",
    marginLeft: "auto",
  },
});

interface CarouselProps {
  //avis à faire défiler dans le carousel
  avis: Avis[];
}

export const CarouselAvis = (props: CarouselProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {props.avis.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= props.avis.length - 1 ? (
              <>
                <p style={{ textAlign: "center" }}>"{step.texte}"</p>
                <br />
                <p style={{ float: "right", marginRight: "40px" }}>
                  {step.auteur}
                </p>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};
