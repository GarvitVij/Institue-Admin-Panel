import classes from './Notice.module.css';
import React from 'react';
import Typography from '../../MUI/Typography/Typography'

const Notices = (props) => {
    const noticesArray = [
        {heading: "Fee Submission"},
        {heading: "Form Submission"},
        {heading: "Regarding Examination"},
        {heading: "GGWP"},
        {heading: 'NHK'}

    ]

    const notices = noticesArray.map(notice=> <li><Typography>{notice.heading}</Typography></li>)

    const TypographyHeading={variant: "h5" , align:"center"}

    return(
        <div className={classes.Notice}>
        <Typography styles={TypographyHeading}>Current  Notices</Typography>
        <ul>
        {notices}
        </ul>
        <Typography>Go to </Typography>
        </div>
    )
}

export default Notices