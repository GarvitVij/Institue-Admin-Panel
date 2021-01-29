import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '../Typography/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SimpleAccordion = (props) => {
    
    const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: props.height,
        marginBottom:props.marginBottom,
    },
    iconStyles: {
        ...props.iconStyle
    },
    AccordionColor: {
        backgroundColor:"#6B58DF",
        color:"White"
    },
    AccordionDeatils:{
        backgroundColor:"white",
        color:"black",
        ...props.borders,
        ...props.display
    },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Accordion className={classes.AccordionColor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.iconStyles}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{props.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDeatils}>
                {props.children}
            </AccordionDetails>
          </Accordion>
        </div>
      );  
}

export default SimpleAccordion