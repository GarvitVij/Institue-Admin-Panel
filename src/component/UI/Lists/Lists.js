/* 
    Description: This component provide custom settings to Material UI List and provide data to it
*/

import React from 'react';
import MUILists from '../../MUI/Lists/Lists'
import Avatar from '../../MUI/Avatar/Avatar'

const listItems = [
    {
        label: "Home",
        icon: "HomeIcon",
        link:"/home"
    }, {
        label: "Detailed Report",
        icon: "AssessmentIcon",
        link: "/detailedReport"
    }, {
        label: "Receipts",
        icon: "ReceiptIcon",
        link: "/receipts"
    }, {
        label: "Request",
        icon: "RepeatOneIcon",
        link: "/request"
    },{
        label: "Site Updates",
        icon: "UpdateIcon",
        link: "/siteUpdates"
    }, {
        label: "Student Updates",
        icon: "SupervisorAccountIcon",
        link: "/studentUpdates"
    }, {
        label: "Logs",
        icon: "AddToQueueIcon",
        link: "/logs"
    }, {
        label: "Logout",
        icon: "ExitToAppIcon",
        link: "/logout"
    }
]

const Lists = (props) => (
    <MUILists list={listItems}>
        <Avatar />
    </MUILists>
)

export default Lists