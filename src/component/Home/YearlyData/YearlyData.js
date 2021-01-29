import React from 'react';
import Typography from '../../MUI/Typography/Typography'
import SimpleAccordion from '../../UI/Accordions/SimpleAccordion'
import classes from "./YearlyData.module.css";

const YearlyData = (props) => {
    const typographyHeadingStyle = {variant:"h3", align:"center", gutterBottom:true}
    const typographyBatchStyle = {variant: "body1", align:"center", gutterBottom:true}
    return(
        <div className={classes.YearlyData}>
            <Typography styles={typographyHeadingStyle} >{props.year}</Typography>
            <Typography styles={typographyBatchStyle}>{props.batch}</Typography>
            {props.branches.map(branch => (
                <SimpleAccordion display={{display: "block"}} heading={branch.branch} key={branch.branch}>
                <div className={classes.Flex}>
                    <Typography>{branch.Morning.timing}</Typography>
                    <Typography>{`${branch.Morning.paid}/${branch.Morning.total}`}</Typography>
                    </div><div className={classes.Flex}>
                    <Typography>{branch.Evening.timing}</Typography>
                    <Typography>{`${branch.Evening.paid}/${branch.Evening.total}`}</Typography>
                    </div>    
                </SimpleAccordion>
            ))}
        </div>

    )
}

export default YearlyData