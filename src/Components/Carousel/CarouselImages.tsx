import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MobileStepper } from "@material-ui/core";
import { AffichageImage } from "./AffichageImage";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  stepper: {
    justifyContent: "center",
    backgroundColor: "white",
    "& .MuiMobileStepper-dotActive": {
      backgroundColor: "#D19D8E",
    },
  },
}));

interface CarouselProps {
  //images à faire défiler dans le carousel
  images: firebase.storage.Reference[];
}

export const CarouselImages = (props: CarouselProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  //Images à faire défiler dans le carousel
  const imagesCarousel = props.images;

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
      >
        {imagesCarousel.map((step, index) => (
          <div key={step.fullPath}>
            {Math.abs(activeStep - index) <= imagesCarousel.length - 1 ? (
              <AffichageImage image={step} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={imagesCarousel.length}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={undefined}
        backButton={undefined}
        className={classes.stepper}
      />
    </div>
  );
};
