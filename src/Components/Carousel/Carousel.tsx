import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

//Images
import materiel from "../../Images/Carousel/materiel.jpg";
import cabinetJune from "../../Images/Carousel/cabinetJune.png";
import chezJune from "../../Images/Carousel/chezJune.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  mobileStepper: {
    "&.MuiMobileStepper-dots": {
      color: "#D19D8E",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    display: "block",
    overflow: "hidden",
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  icon: {
    width: "20px",
  },
}));

interface CarouselProps {}

export const Carousel = (props: CarouselProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const imagesCarousel: string[] = [materiel, chezJune, cabinetJune];

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
