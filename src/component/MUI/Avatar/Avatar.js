import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';

const MUIAvatar = (props) => {
    
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        large: {
          width: theme.spacing(10),
          height: theme.spacing(10),
          background: theme.palette.secondary.main,
          color:theme.palette.secondary.dark
        },
        center:{
            display:'flex',
            justifyContent:'center',
            margin: '5vh 0'
        }
    }));
    
    const classes = useStyles();

    return (
        <div className={classes.center}>
            <Avatar className={classes.large}>
                <AccountCircleIcon className={classes.large}/>
            </Avatar>
        </div>
    )    
}

export default MUIAvatar