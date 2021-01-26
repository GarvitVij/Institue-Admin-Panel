import React from 'react';
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

        return (
            <ListItem button>
            <ListItemIcon>
               {Icon}
            </ListItemIcon>
            <ListItemText primary={props.name} />
        </ListItem>
        )

   }

export default MUIList