import React from 'react';
import MUIDrawer from '../../MUI/Drawer/Drawer'
import Lists from '../Lists/Lists'

const Drawer = (props) => (
    <MUIDrawer
        drawerSide={"left"}
        isOpen={props.isDrawerOpen}
        closeHandler={props.drawerCloseHandler}
    >
    <Lists/>
    </MUIDrawer>
)

export default Drawer