import React from 'react';
import MUIGrid from '@material-ui/core/Grid';
import Paper from '../Paper/Paper';

const Grid = (props) => {
    const paperStyle={
        border:'2px solid black',
        boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.5)',
        borderRadius: '40px',
        height: '100%',
        padding: 20
    }
    return(
        <MUIGrid  item {...props.gridLayout}>
        <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
            {props.children}
        </Paper>
      </MUIGrid>
    )
}

export default Grid