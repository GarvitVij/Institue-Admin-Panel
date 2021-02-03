import React, { Component } from 'react';
import Typography from '../../component/MUI/Typography/Typography' 
import SimpleAccordion from '../../component/MUI/Accordions/SimpleAccordion'
import classes from './SiteUpdates.module.css';
import NoticeUpdate from '../../component/SiteUpdates/Notices/Notices'
import Fee from '../../component/SiteUpdates/Fees/Fee'
import Button from '@material-ui/core/Button';

   class SiteUpdates extends Component {
       state = {
        noticesArray: [
            {heading: "Fee Submission", description:"Last date to submit fee is 10 Jan"},
            {heading: "Form Submission", description: "Last date to submit form is 20 Jan"},
            {heading: "Regarding Examination", description: "Exams will start From 30 June"},
            {heading: "Online Classes", description: "Classes will Start from 15Jan"},
            {heading: "", description: ""}
        ],
        isSavable: true,
        fee:{
            semesterFee: 200,
            backExamFee: 100,
            maximumBackFee: 500
        }
       }

   render(){

        const typographyStyle={variant: "h2", align:"center"}
        const accordionIconStyle = {color:"white", fontSize: "2rem"}
        const accordionTypographyStyles = {variant:"h6"}

        const notices = this.state.noticesArray.map((notice,index) => 
            <SimpleAccordion 
                heading={notice.heading || 'Empty Notice'}
                iconStyle={accordionIconStyle}
                typographyStyle={accordionTypographyStyles}
                >
                <NoticeUpdate 
                    heading={notice.heading} 
                    description={notice.description}    
                    />
            </SimpleAccordion> 
        )

        const fee = [] 
        for (const feeType in this.state.fee) {
            fee.push(<Fee label={feeType} value={this.state.fee[feeType]} />)
        }

       return (
            <div className={classes.Site}>   
                <Typography styles={typographyStyle}>Updates</Typography>
                <div className={classes.Accordion}>
                    <SimpleAccordion 
                        heading="Notices" 
                        iconStyle={accordionIconStyle}
                        typographyStyle={accordionTypographyStyles}
                        >
                            <div className={classes.Notices}>
                                {notices}      
                                <Button
                                    variant="contained" 
                                    color="primary" 
                                    disabled={!this.state.isSavable} 
                                    > Save
                                </Button>
                            </div>
                    </SimpleAccordion>
                    <SimpleAccordion 
                        heading="Fees" 
                        iconStyle={accordionIconStyle} 
                        typographyStyle={accordionTypographyStyles}
                        >
                        <div className={classes.Notices}>
                        {fee}      
                        <Button
                            variant="contained" 
                            color="primary" 
                            disabled={!this.state.isSavable} 
                            > Save
                        </Button>
                    </div>
                    </SimpleAccordion>
                </div>
                </div>
        )
   }
}

export default SiteUpdates