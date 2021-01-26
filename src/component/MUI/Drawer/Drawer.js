import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import Lists from '../Lists/Lists'

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

export default MUIDrawer