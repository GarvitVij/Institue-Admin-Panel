import React from 'react';
import Typography from '../../MUI/Typography/Typography'
import Accordion from '../../MUI/Accordion/Accordion'

const YearlyData = (props) => {
    const typographyHeadingStyle = {variant:"h3", align:"center"}
    const typographyBatchStyle = {variant: "body1", align:"center"}
    return(
        <div>
            <Typography styles={typographyHeadingStyle}>{props.year}</Typography>
            <Typography style={typographyBatchStyle}>{props.batch}</Typography>
            <Accordion heading="Computer Science">
                <Typography>Morning: 210</Typography>
                <Typography>Evening: 210</Typography>
            </Accordion>
            <Accordion heading="Computer Science"> <Typography>Morning: 210</Typography>
            <Typography>Evening: 210</Typography></Accordion>
            <Accordion heading="Computer Science"> <Typography>Morning: 210</Typography>
            <Typography>Evening: 210</Typography></Accordion>

        </div>

    )
}

export default YearlyData