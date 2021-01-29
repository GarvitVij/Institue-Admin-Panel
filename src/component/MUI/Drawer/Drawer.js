import React from 'react';
import Drawer from "@material-ui/core/Drawer";

const MUIDrawer = (props) => {

    return(
            <Drawer
                anchor={props.drawerSide}
                open={props.isOpen}
                onClose={props.closeHandler}
            >
                {props.children}
            </Drawer>
    )
    
}

export default MUIDrawer