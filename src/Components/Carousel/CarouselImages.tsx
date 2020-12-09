import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },

  img: {
    height: 400,
    display: "block",
    overflow: "hidden",
    maxWidth: "100%",
    marginRight: "auto",
    marginLeft: "auto",
  },
}));

interface CarouselProps {
  //images à faire défiler dans le carousel
  images: string[];
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
          <div key={step}>
            {Math.abs(activeStep - index) <= imagesCarousel.length - 1 ? (
              <img className={classes.img} src={step} alt={step} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};
