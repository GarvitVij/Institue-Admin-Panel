import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default function MUIPaper(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(2),
            width: '100%',
            height: 'auto',
            backgroundColor: props.color
          },
        },
      }));
      


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={props.elevation}> 
                {props.children}
            </Paper>
        </div>
    );
}
