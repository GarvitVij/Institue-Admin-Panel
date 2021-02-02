import React, { Component } from 'react';
import Typography from '../../component/MUI/Typography/Typography'
import SearchSort from '../../component/Requests/SearchSort/SearchSort'
import SimpleAccordion from '../../component/MUI/Accordions/SimpleAccordion'
import Request from '../../component/Requests/Request/Request'
import classes from './Request.module.css'

   class Requests extends Component {
       state = {
           pendingRequests: [{
               rollNumber : 1835051018,
               semester: 2,
               branch: 'Computer Science',
               name:'Garvit',
               subjectFrom: 'DE',
               subjectTo: 'Maths'
           },{
            rollNumber : 1835051018,
            semester: 2,
            branch: 'Computer Science',
            name:'Garvit',
            subjectFrom: 'DE',
            subjectTo: 'Maths'
        },{
            rollNumber : 1835051018,
            semester: 2,
            branch: 'Computer Science',
            name:'Garvit',
            subjectFrom: 'DE',
            subjectTo: 'Maths'
        },{
            rollNumber : 1835051018,
            semester: 2,
            branch: 'Computer Science',
            name:'Garvit',
            subjectFrom: 'DE',
            subjectTo: 'Maths'
        },{
            rollNumber : 1835051018,
            semester: 2,
            branch: 'Computer Science',
            name:'Garvit',
            subjectFrom: 'DE',
            subjectTo: 'Maths'
        }]
       }

   render(){
       const typographySettings = {align:'center', variant:'h2'}

        const updates = this.state.pendingRequests.map(request =><SimpleAccordion 
                heading={`Roll Number: ${request.rollNumber}, Branch: ${request.branch}, Semester: ${request.semester}`}>
                <Request {...request} />
                </SimpleAccordion>)

       return (
           <div style={{margin: '3%'}}>
                <Typography styles={typographySettings}>Requests</Typography>
                <SearchSort />
                <div className={classes.Request}>
                {updates}
                </div>
                </div>
       )
   }
}

export default Requests