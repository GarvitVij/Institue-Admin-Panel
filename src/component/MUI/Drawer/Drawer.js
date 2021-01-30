/* 
    Description: Temporary Drawer, created with the help of Material UI,
    DOCS: https://material-ui.com/components/app-bar/
*/

import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';

const MUIDrawer = (props) => {

    return(
        <React.Fragment>
            <Drawer
                anchor={props.drawerSide}
                open={props.isOpen}
                onClose={props.closeHandler}
            >
                {props.children}
            </Drawer>
        </React.Fragment>
    )
}

MUIDrawer.propTypes = {
    anchor: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func
}


export default MUIDrawer