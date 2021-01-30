/* 
    Description: List Items that are to be displayed in Drawer,
    Note that: it is creates a single list item, Ittrate over an array to create Multiple Items
    created with the help of Material Ui
    DOCS: https://material-ui.com/components/lists/
*/

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
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PropTypes from 'prop-types';

   const MUIList = (props) => {

        let Icon = null
        
        Icon = props.icon === "HomeIcon" ? <HomeIcon /> : props.icon === "AssessmentIcon" ? <AssessmentIcon /> : props.icon === "ReceiptIcon" ? <ReceiptIcon /> : props.icon === "UpdateIcon" ?  <UpdateIcon /> : props.icon === "AddToQueueIcon" ? <AddToQueueIcon/> : props.icon === "ExitToAppIcon" ? <ExitToAppIcon /> :  props.icon === "SupervisorAccountIcon" ? <SupervisorAccountIcon /> : null

        const useStyles = makeStyles((theme) => ({
            Color: {
                color:theme.palette.secondary.dark,
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

MUIList.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string
}

export default MUIList