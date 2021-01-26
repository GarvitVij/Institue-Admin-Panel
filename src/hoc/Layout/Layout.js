import React, { Component } from 'react';
import classes from './Layout.module.css'
import AppBar from "../../component/UI/AppBar/AppBar";
import Drawer from '../../component/UI/Drawer/Drawer'
import Paper from '../../component/UI/Paper/Paper'



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
           <div className={classes.Layout}>
                <AppBar drawerOpenhandler={this.onDrawerOpenHandler} />
                <Drawer drawerCloseHandler={this.onDrawerCloseHandler} isDrawerOpen={this.state.isDrawerOpen}/>
                <Paper>
                <h1>Hello React !</h1>
                <h1>Hello React !</h1>
                <h1>Hello React !</h1>
                <h1>Hello React !</h1>
                <h1>Hello React !</h1>
                <h1>Hello React !</h1>
                <h1>Hello React !</h1>
                <h1>Hello React !</h1>
                <h1>Hello React !</h1>
                </Paper>
           </div>
           )
   }
}

export default AdminPanelLayout