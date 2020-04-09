import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 23,
    backgroundColor: lighten("#000000", 0.10),
    borderRadius: 5,
    border: "2px solid gray",
    margin: "1px",
    left: "20px",
    maxWidth: '85vw', // root div height
    minWidth: '85vw' // root div height       
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
    margin: "0px",
    padding: "3px"
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
    left: "20px",
    color: "gold",
    fontFamily: "san-serif",
    outline: "black",
    fontWeight: "bold",
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    height: 0,
    // width: 200
  },
  skillLevel: {
    position: "relative",
    // left: "80px",
    left: "90px",
    fontSize: "16px",
    color: "white",
    fontFamily: "san-serif",
    outline: "black",
    fontWeight: "bold",
    textShadow:"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  }
}));

export default function CustomizedProgressBar(skillObj) {
  const classes = useStyles();

  const skill = skillObj.skill;

  // MIN = Minimum expected value
  // MAX = Maximium expected value
  // Function to normalise the values (MIN / MAX could be integrated)
  const normalise = (value, min, max) => (value - min) * 100 / (max - min);  
  const calcLeft = (skill) => ((skill.name.length * 7) + 70 + 'px');
  // console.log(calcLeft(skill));
  // console.log(skill.name.length);

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={normalise(skill.level, 0, skill.levelCap)}
      />
      <div className={classes.skillLabel}>
        <div className={classes.skillName}>{skill.name}</div>
        <div style={{ left: calcLeft(skill)}} className={classes.skillLevel}>{skill.level}/{skill.levelCap}</div>
      </div>
    </div>
  );
}