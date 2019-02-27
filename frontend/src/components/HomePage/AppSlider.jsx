import React from "react";
import { withStyles, Fab } from "@material-ui/core/";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons/";
import SwipeableViews from "react-swipeable-views";

const slides = [
  {
    label: "Some text 1",
    imgPath:
      "https://doc-08-7k-docs.googleusercontent.com/docs/securesc/is1pe2eo3caj79a86q2rkn22a7s6idur/b01mbthvlsfgbf97f5n07de7uetof6ln/1551254400000/15387216800683716261/15387216800683716261/1S3Ykn8nlYaR7RFBaH97WJFqbnX1kVTnr?e=download"
  },
  {
    label: "Some text 2",
    imgPath:
      "https://doc-00-7k-docs.googleusercontent.com/docs/securesc/is1pe2eo3caj79a86q2rkn22a7s6idur/ubmcehhsu784a6egoel755nopbjd4idc/1551254400000/15387216800683716261/15387216800683716261/19ypbiZDQEd8yDLUj6scjj43eGC5_FCQv?e=download"
  },
  {
    label: "Some text 3",
    imgPath:
      "https://doc-0o-7k-docs.googleusercontent.com/docs/securesc/is1pe2eo3caj79a86q2rkn22a7s6idur/7bslvdf2g7aigqdv8nirlcaqflunt7c9/1551254400000/15387216800683716261/15387216800683716261/1F8-2DW3a-fK8z5876CFpNga6AjxSN221?e=download"
  }
];

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 2
  },
  sliderContainer: {
    width: "100%",
    position: "relative",
    overflowX: "hidden"
  },
  sliderSlides: {
    display: "flex"
  },
  sliderItem: {
    minWidth: "100%"
  },
  sliderImg: {
    display: "block",
    width: "100%",
    height: "auto",
    margin: "auto"
  },
  sliderBtnNext: {
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    right: theme.spacing.unit * 3
  },
  sliderBtnPrev: {
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    left: theme.spacing.unit * 3
  }
});

class AppSlider extends React.Component {
  state = {
    activeStep: 0,
    maxSteps: slides.length - 1
  };

  handleNext = () => {
    if (this.state.activeStep < this.state.maxSteps) {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1
      }));
    } else {
      this.setState({ activeStep: 0 });
    }
  };

  handleBack = () => {
    if (this.state.activeStep !== 0) {
      this.setState(prevState => ({
        activeStep: prevState.activeStep - 1
      }));
    } else {
      this.setState({ activeStep: this.state.maxSteps });
    }
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { activeStep } = this.state;
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.sliderContainer}>
          <div className={classes.sliderSlides}>
            <SwipeableViews
              onChangeIndex={this.handleStepChange}
              index={activeStep}
              resistance
            >
              {slides.map((step, index) => (
                <div className={classes.sliderItem} key={step.label}>
                  <img
                    className={classes.sliderImg}
                    src={step.imgPath}
                    alt={step.label}
                  />
                </div>
              ))}
            </SwipeableViews>
          </div>
          <Fab
            className={classes.sliderBtnPrev}
            color="primary"
            onClick={this.handleBack}
          >
            <KeyboardArrowLeft />
          </Fab>
          <Fab
            className={classes.sliderBtnNext}
            color="primary"
            onClick={this.handleNext}
          >
            <KeyboardArrowRight />
          </Fab>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(AppSlider);
