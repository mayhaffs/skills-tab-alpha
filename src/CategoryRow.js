import React from "react";
// import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import { lighten, makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
import Style from 'style-it';
import Fab from '@material-ui/core/Fab';
// import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: lighten("#000000", 0.10),
    // margin: "0px",
    padding: "3px",
    maxHeight: '20px', // root div height
    minHeight: '20px', // root div height    
    // maxWidth: '15px', // root div width    
    // minWidth: '15px' // root div width
  },
  margin: {
    margin: theme.spacing(0)
  },
  categoryLabel: {
    position: "relative",
    top: '-18px',
    left: "32px",
    fontSize: "17px",
    color: "white",
    fontFamily: "san-serif",
    outline: "black",
    fontWeight: "bold",
    textShadow:"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",    
  },
  fab: {
    position: 'relative',
    left: '7px',
    maxWidth: '15px', 
    maxHeight: '15px', 
    minWidth: '15px', 
    minHeight: '15px',
    marginRight: '5px'
  },
  iconRoot: {
    top: '-20px'   
  }
}));

export default function CategoryRow(skillObj) {
  const classes = useStyles();
  const category = skillObj.category;

    // Ref - Style.it code allows easily CSS pseudo-selection in React
    return Style.it(`
      // // example // //
      .plus:before {
        content: '+';  
        height: 40px; 
      }      
      `,
      <div className={classes.root}>
        <div className="iconRoot">
          <Fab color="secondary" aria-label="add" className={classes.fab} >
            <AddIcon style={{ fontSize: 13 }} />
          </Fab>
          <div className={classes.categoryLabel}>
            {category}
          </div>      
        </div>
      </div>
  );
}