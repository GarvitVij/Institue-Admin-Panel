import React, { Component } from 'react';
import Typography from '../../component/MUI/Typography/Typography'
import SearchSort from '../../component/Requests/SearchSort/SearchSort'
import SimpleAccordion from '../../component/MUI/Accordions/SimpleAccordion'
import Request from '../../component/Requests/Request/Request'
import classes from './Request.module.css'

   class Requests extends Component {
       state = {
           pendingRequests: [{
               id:1,
               rollNumber : 1835051019,
               semester: 2,
               branch: 'Computer Science - M',
               name:'Garvit',
               subjectFrom: 'DE',
               subjectTo: 'Maths'
           },{
            id:2,
            rollNumber : 1835051015,
            semester: 1,
            branch: 'Computer Science - M',
            name:'Garvit',
            subjectFrom: 'DE',
            subjectTo: 'Maths'
        },{
            id:3,
            rollNumber : 1835051016,
            semester: 6,
            branch: 'Computer Science - M',
            name:'Garvit',
            subjectFrom: 'DE',
            subjectTo: 'Maths'
        },{
            id:4,
            rollNumber : 1835051018,
            semester: 1,
            branch: 'Computer Science - E',
            name:'Garvit',
            subjectFrom: 'DE',
            subjectTo: 'Maths'
        },{
            id:5,
            rollNumber : 1835051018,
            semester: 3,
            branch: 'Electrical & Communication - E',
            name:'Garvit',
            subjectFrom: 'DE',
            subjectTo: 'Maths'
        }],
        sortedPendingRequest: [],
        modal: false,
        filters:{
            rollNumber: '',
            branch: '',
            semester: ''
        }
       }

       updateReceipt = (id) => {
            console.log('Update Request for', id)
       }

       onModalClose = () => {
           this.setState({modal: false})
       }

       onModalOpen = () => {
           this.setState({modal:true})
       }

       onSort = () => {
            let branch = ""
            if(this.state.filters.branch !== ""){
                const branchInit = this.state.filters.branch.split('-')
                branch = branchInit[0] === "CS" ? "Computer Science" : branchInit[0] === "ENE" ? "Electrical & Communication" : branchInit[0] === "AM" ? "AutoMobile" : ""
                branch = branchInit[1] === "M" ? (branch + " - M") : (branch + " - E")    
            }
            
            let filteredRequest = this.state.pendingRequests
                                        .filter(request => request.rollNumber === (this.state.filters.rollNumber !== '' ? parseInt(this.state.filters.rollNumber) : request.rollNumber))
                                        .filter(request => request.semester === (this.state.filters.semester !== '' ? this.state.filters.semester : request.semester))
                                        .filter(request => request.branch === (this.state.filters.batch !== '' ? branch : request.batch))                      
            this.setState({sortedPendingRequest: filteredRequest, modal: false})      
        }

        onSearch = () =>{
            console.log('here goes search request ')
            this.setState({modal: false})
        }


       onSelectHandler = (id,eventValue ) =>  {
        const updatedFilters = {...this.state.filters}
        updatedFilters[id] = eventValue
        this.setState({filters: updatedFilters }) 
    }

       onInputHandler = (event) => {
           const updatedFilters = {...this.state.filters}
           updatedFilters.rollNumber = event.target.value
           this.setState({filters: updatedFilters})
        }

   render(){
       const typographySettings = {align:'center', variant:'h2'}

        let mappableRequests = this.state.sortedPendingRequest.length === 0 ? this.state.pendingRequests : this.state.sortedPendingRequest 
        const updates = mappableRequests.map(request =><SimpleAccordion 
                heading={`Roll Number: ${request.rollNumber}, Branch: ${request.branch}, Semester: ${request.semester}`}>
                <Request {...request} click={this.updateReceipt} />
                </SimpleAccordion>)

       return (
           <div className={classes.Requests}>
                <Typography styles={typographySettings}>Requests</Typography>
                <SearchSort 
                modal={this.state.modal}
                onModalOpen = {this.onModalOpen}
                onModalClose = {this.onModalClose}
                selectHandler = {this.onSelectHandler}
                inputHandler = {this.onInputHandler}
                values={this.state.filters}
                sort={this.onSort}
                search={this.onSearch}
                />
                <div className={classes.Request}>
                {updates}
                </div>
                </div>
       )
   }
}

export default Requests



