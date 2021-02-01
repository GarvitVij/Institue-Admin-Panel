import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './Notice.module.css'


   const Notices = (props) => {

    return(
        <div className={classes.Notice}>
            <TextField variant="filled" id={props.heading} label={props.heading} fullWidth={true} value={props.heading} />
            <TextField multiline fullWidth variant="filled" id={props.heading} label={props.heading} value={props.description}/>
        </div>
    )

   }

export default Notices