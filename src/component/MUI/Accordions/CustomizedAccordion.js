import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '../Typography/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: '#6B58DF',
    color:'white',
    margin:'1% 0',
    borderRadius:'20px',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    color:'black',
    borderRadius:'20px',
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    border: '1px solid black',
    borderTop:'0',
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState(props.panel);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === `panel${props.panel}`} onChange={handleChange(`panel${props.panel}`)}>
        <AccordionSummary aria-controls={`panel${props.panel}d-content`} id={`panel${props.panel}d-header`}>
          <Typography>{props.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                {props.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
