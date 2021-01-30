/* 
    Description : This Component creates a list of notices.
    TODO: GET notices from backend
    DEFAULT_NAMED_NOTE: Docs import it as Accordion, But I imported it as CustomizedAccordion
*/

import classes from './Notice.module.css';
import React from 'react';
import CustomizedAccordion from '../../MUI/Accordions/CustomizedAccordion'
import Typography from '../../MUI/Typography/Typography'

const Notices = (props) => {
    const noticesArray = [
        {heading: "Fee Submission", description:"Last date to submit fee is 10 Jan"},
        {heading: "Form Submission", description: "Last date to submit form is 20 Jan"},
        {heading: "Regarding Examination", description: "Exams will start From 30 June"},
        {heading: "Online Classes", description: "Classes will Start from 15Jan"},
        {heading: "Result", description: "Result for Sem 1,3,6 is available at"}

    ]

    const notices = noticesArray.map((notice,index)=> {
       return(<CustomizedAccordion key={index} panel={index} heading={notice.heading} description={notice.description} />) 
    })

    const TypographyHeading={variant: "h5" , align:"center"}

    return(
        <div className={classes.Notice}>
        <Typography styles={TypographyHeading}>Current  Notices</Typography>
        <ul className={classes.List}>
        {notices}
        </ul>
        </div>
    )
}

export default Notices