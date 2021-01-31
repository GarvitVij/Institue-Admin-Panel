import React from 'react'
import MUIButtonGroup from '@material-ui/core/ButtonGroup';



const ButtonGroup = (props) => {

    const styles = {alignItems:'center', flexWrap:'wrap', justifyContent:'center' }

    return(
        <MUIButtonGroup style={styles} variant="text" color="primary" aria-label="text primary button group">
            {props.children}
        </MUIButtonGroup>
    ) 
}

export default ButtonGroup