import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 23,
    backgroundColor: lighten("#000000", 0.10),
    borderRadius: 5,
    border: "2px solid gray",
    margin: "1px"
  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#0000a5"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: lighten("#000000", 0.10),
    margin: "10px",
    padding: "10px"
  },
  // margin: {
  //   margin: theme.spacing(0)
  // },
  skillLabel: {
    position: "relative",
    top: "-23px",
    left: "10px",
    height: 0
  },
  skillName: {
    position: "relative",
    fontSize: "16px",
    color: "gold",
    fontFamily: "san-serif",
    outline: "black",
    fontWeight: "bold",
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    height: 0,
    width: 100
  },
  skillLevel: {
    position: "relative",
    left: "80px",
    fontSize: "16px",
    color: "white",
    fontFamily: "san-serif",
    outline: "black",
    fontWeight: "bold",
    textShadow:"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  }
}));

export default function CustomizedProgressBars() {
  const classes = useStyles();

  // MIN = Minimum expected value
  // MAX = Maximium expected value
  // Function to normalise the values (MIN / MAX could be integrated)
  const normalise = (value, min, max) => (value - min) * 100 / (max - min);  

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={normalise(77, 0, 150)}
      />
      <div className={classes.skillLabel}>
        <div className={classes.skillName}>Cooking</div>
        <div className={classes.skillLevel}>77/150</div>
      </div>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={normalise(45, 0, 75)}
      />
      <div className={classes.skillLabel}>
        <div className={classes.skillName}>First Aid</div>
        <div className={classes.skillLevel}>45/75</div>
      </div>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={normalise(4, 0, 75)}
      />
      <div className={classes.skillLabel}>
        <div className={classes.skillName}>Fishing</div>
        <div className={classes.skillLevel}>4/75</div>
      </div>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={normalise(4, 0, 75)}
      />
      <div className={classes.skillLabel}>
        <div className={classes.skillName}>Riding</div>
        <div className={classes.skillLevel}>4/75</div>
      </div>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={normalise(16, 0, 75)}
      />
      <div className={classes.skillLabel}>
        <div className={classes.skillName}>DevCraft</div>
        <div className={classes.skillLevel}>16/75</div>
      </div>
    </div>
  );
}