import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


const MUIMenuAppBar = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        appBarSettings: {
            height: '10vh',
            justifyContent: 'space-between'
        },
        appBarIconSettings: {
            fontSize:'3rem',
            color: process.env.REACT_APP_ICON_COLOR
        },
        appBarColor: {
            background: process.env.REACT_APP_SECONDAY_COLOR
        }
      
          }
      ));
      

    const classes = useStyles();

     return (
        <div className={classes.root}>
            <AppBar className={classes.appBarColor} position="static">
                <Toolbar className={classes.appBarSettings}>
                    <IconButton onClick={props.drawerOpenhandler} edge="start" className={classes.menuButton}  aria-label="Burger Menu">
                        <MenuIcon className={classes.appBarIconSettings} />
                    </IconButton>
                    <div>
                    <IconButton
                        aria-label="User Profile Picture"
                        aria-controls="profile-picture"
                        aria-haspopup="false"
                    >
                        <AccountCircle className={classes.appBarIconSettings} />
                    </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MUIMenuAppBar
