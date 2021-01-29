import React from 'react';
import MUIPaper from '../../MUI/Paper/Paper'

const Paper = (props) => (
    <MUIPaper
        bgcolor={props.bgcolor}
        elevation={props.elevation}
        extraStyles={props.extraStyles}
    >{props.children} 
    </MUIPaper>
)

export default Paper