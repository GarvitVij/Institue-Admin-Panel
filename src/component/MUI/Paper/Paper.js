import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

export default function MUIPaper(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(2),
            width: '100%',
            height: 'auto',
            backgroundColor: props.bgcolor,
            ...props.extraStyles
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

MUIPaper.propTypes = {
    bgcolor: PropTypes.string,
    extraStyles: PropTypes.object,
    elevation: PropTypes.number,
    children: PropTypes.element.isRequired
}
