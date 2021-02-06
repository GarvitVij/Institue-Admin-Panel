import React from 'react';
import TextField from '@material-ui/core/TextField';

const Fee = (props) => (
    <TextField label={props.label} type="Number" onChange={(event) => props.changed(event, props.label)} variant="outlined" value={props.value} style={{margin:'2%'}} />
)

export default Fee