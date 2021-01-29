import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const MUIDrawer = (props) => {

    return(
        <React.Fragment>
            <SwipeableDrawer
                anchor={props.drawerSide}
                open={props.isOpen}
                onClose={props.closeHandler}
            >
                {props.children}
            </SwipeableDrawer>
        </React.Fragment>
    )
    
}

export default MUIDrawer