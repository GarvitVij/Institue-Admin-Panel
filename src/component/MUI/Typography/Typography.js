import React from 'react';
import Text from '@material-ui/core/Typography'; 
import PropTypes from 'prop-types';
//This is Typography but becuase it was a default export i exportted it as Text

const Typography = (props) => (
    <Text {...props.styles} >{props.children}</Text>
)

Typography.propTypes = {
    styles: PropTypes.object,
    children: PropTypes.string
}


export default  Typography