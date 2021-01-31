/* 
    Description: This component provide custom settings to Material UI List and provide data to it
*/

import React from 'react';
import MUILists from '../../MUI/Lists/Lists'
import Avatar from '../../MUI/Avatar/Avatar'

const listItems = [
    {
        label: "Home",
        icon: "HomeIcon"
    }, {
        label: "Detailed Report",
        icon: "AssessmentIcon"
    }, {
        label: "Receipts",
        icon: "ReceiptIcon"
    }, {
        label: "Site Updates",
        icon: "UpdateIcon"
    }, {
        label: "Student Updates",
        icon: "SupervisorAccountIcon"
    }, {
        label: "Logs",
        icon: "AddToQueueIcon"
    }, {
        label: "Logout",
        icon: "ExitToAppIcon"
    }
]

const Lists = (props) => (
    <MUILists list={listItems}>
        <Avatar />
    </MUILists>
)

export default Lists