import React from 'react';
import MUILists from '../../MUI/Lists/Lists'
import Avatar from '../Avatar/Avatar'

const listItems = [
    {
        label: "Home",
        icon: "HomeIcon"
    }, {
        label: "Detailed Report",
        icon: "AssessmentIcon"
    }, {
        label: "Receipt Update",
        icon: "ReceiptIcon"
    }, {
        label: "Updates",
        icon: "UpdateIcon"
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