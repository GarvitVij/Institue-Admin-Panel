import React from 'react';
import Text from '@material-ui/core/Typography'; 
//This is Typography but becuase it was a default export i exportted it as Text

const Typography = (props) => (
    <Text {...props.styles} >{props.children}</Text>
)

export default  Typography