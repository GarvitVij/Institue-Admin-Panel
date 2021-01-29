import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ReceiptIcon from '@material-ui/icons/Receipt';
import UpdateIcon from '@material-ui/icons/Update';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

   const MUIList = (props) => {

        let Icon = null
        
        Icon = props.icon === "HomeIcon" ? <HomeIcon /> : props.icon === "AssessmentIcon" ? <AssessmentIcon /> : props.icon === "ReceiptIcon" ? <ReceiptIcon /> : props.icon === "UpdateIcon" ?  <UpdateIcon /> : props.icon === "AddToQueueIcon" ? <AddToQueueIcon/> : props.icon === "ExitToAppIcon" ? <ExitToAppIcon /> : null

        const useStyles = makeStyles(() => ({
            Color: {
                color:'Black',
            },
            Margin:{
                margin:'0 1vw'
            }
          }));
    
        const classes = useStyles();
    
        return (
            <ListItem button className={classes.Margin}>
            <ListItemIcon className={classes.Color}>
               {Icon}
            </ListItemIcon>
            <ListItemText className={classes.Color} primary={props.name} />
        </ListItem>
        )

   }

export default MUIList