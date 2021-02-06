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
            {id: 1,heading: "Fee Submission", description:"Last date to submit fee is 10 Jan"},
            {id: 2,heading: "Form Submission", description: "Last date to submit form is 20 Jan"},
            {id: 3,heading: "Regarding Examination", description: "Exams will start From 30 June"},
            {id: 4,heading: "Online Classes", description: "Classes will Start from 15Jan"},
            {id: 5,heading: "", description: ""}
        ],
        isSavableNotices: false,
        isSavableFee: false,
        fee:{
            semesterFee: 200,
            backExamFee: 100,
            maximumBackFee: 500
        }
       }

       onChangeNoticeHandler = (event,id) => {
            const updatedNotice = {...this.state.noticesArray.find(notice => notice.id === id)}
            updatedNotice[event.target.id] = event.target.value;
            const updatedNotices = [...this.state.noticesArray]
            const index = updatedNotices.findIndex(key => key.id === id)
            updatedNotices[index] = updatedNotice
            this.setState({noticesArray : updatedNotices, isSavableNotices: true})
       }

       onChangeFeeHandler = (event,id) => {
            const updatedFee = {...this.state.fee}
            updatedFee[id] = event.target.value 
            this.setState({fee: updatedFee, isSavableFee: true})
       }

   render(){

        const typographyStyle={variant: "h2", align:"center"}
        const accordionIconStyle = {color:"white", fontSize: "2rem"}
        const accordionTypographyStyles = {variant:"h6"}

        const notices = this.state.noticesArray.map((notice,index) => 
            <SimpleAccordion 
                key={notice.id}
                heading={notice.heading || 'Empty Notice'}
                iconStyle={accordionIconStyle}
                typographyStyle={accordionTypographyStyles}
                >
                <NoticeUpdate
                    id={notice.id} 
                    heading={notice.heading} 
                    description={notice.description}    
                    changed={this.onChangeNoticeHandler}
                    />
            </SimpleAccordion> 
        )

        const fee = [] 
        for (const feeType in this.state.fee) {
            fee.push(<Fee label={feeType} changed={this.onChangeFeeHandler} value={this.state.fee[feeType]} />)
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
                                    disabled={!this.state.isSavableNotices} 
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
                            disabled={!this.state.isSavableFee} 
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