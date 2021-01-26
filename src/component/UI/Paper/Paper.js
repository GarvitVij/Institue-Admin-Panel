import React from 'react';
import MUIPaper from '../../MUI/Paper/Paper'

const Paper = (props) => (
    <MUIPaper
        color="white"
        elevation={5}
    >{props.children} 
    </MUIPaper>
)

export default Paper