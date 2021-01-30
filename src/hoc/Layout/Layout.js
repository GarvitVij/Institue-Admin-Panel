import React, { Component } from 'react';
import classes from './Layout.module.css'
import AppBar from "../../component/MUI/AppBar/AppBar";
import Drawer from '../../component/UI/Drawer/Drawer'
import Paper from '../../component/MUI/Paper/Paper'
import Home from '../../conatiner/Home/Home'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        "fontFamily": `'Ubuntu', sans-serif;`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       },
       breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 850,
          lg: 940,
          xl: 1200
        }
      }
  });


class AdminPanelLayout extends Component {
    
    state = {
        isDrawerOpen: false
    }

    onDrawerOpenHandler = () => {
        this.setState({isDrawerOpen: true})
    }

    onDrawerCloseHandler = () => {
        this.setState({isDrawerOpen: false})
    }

   render(){
       return (
        <MuiThemeProvider theme={theme}>
           <div className={classes.Layout}>
                <AppBar drawerOpenhandler={this.onDrawerOpenHandler} />
                <Drawer drawerCloseHandler={this.onDrawerCloseHandler} isDrawerOpen={this.state.isDrawerOpen}/>
                <Paper bgcolor="rgba(255,255,255,0.68)" elevation={3}>
                    <Home />
                </Paper>
           </div>
        </MuiThemeProvider>
           )
   }
}

export default AdminPanelLayout