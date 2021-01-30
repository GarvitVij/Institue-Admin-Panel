import React from 'react'
import MUIButtonGroup from '@material-ui/core/ButtonGroup';

const ButtonGroup = (props) => (
    <MUIButtonGroup style={{alignItems:'center', flexWrap:'wrap', justifyContent:'center' }} variant="text" color="primary" aria-label="text primary button group">
        {props.children}
    </MUIButtonGroup>
)

export default ButtonGroup