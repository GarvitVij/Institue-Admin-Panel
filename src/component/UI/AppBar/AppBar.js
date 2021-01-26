import React from  'react';
import MUIMenuAppBar from '../../MUI/AppBar/AppBar'

const appBarSetting={
    height: '10vh',
    justifyContent: 'space-between'
}

const appBarIconSettings = {
    fontSize:'3rem',
    color: process.env.REACT_APP_ICON_COLOR
}

const appBarColor = {
    background: process.env.REACT_APP_SECONDAY_COLOR
}

const AppBar = (props) => (
    <MUIMenuAppBar 
        appBarSettings={appBarSetting}
        appBarIconSettings={appBarIconSettings}
        appBarColor={appBarColor}
        clicked={props.drawerOpenhandler}
    />    
)

export default AppBar