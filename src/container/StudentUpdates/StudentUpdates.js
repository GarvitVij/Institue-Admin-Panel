import React, { Component } from 'react';
import DataGrid from '../../component/MUI/DataGrid/DataGrid'
import Paper from '../../component/MUI/Paper/Paper'
import Buttons from '../../component/StudentUpdates/Buttons/Buttons'


   class StudentUpdates extends Component {
       state = {
           modalEventName: '',
           data: [{
            Name: "Harishankar",
            Branch: "Computer Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1835051004,
            phoneNumber: "000-000-0000",
            id:1835051004 ,
            Batch: "2018-2021",
            Timing: "E",
        }, {
            Name: "Prince Meenia",
            Branch: "Automobile Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1845051010,
            phoneNumber: "000-000-0000",
            id: 1845051010,
            Batch: "2018-2021",
            Timing: "E",
        }, {
            Name: "Vaishali Singh",
            Branch: "Computer Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1835051002,
            phoneNumber: "000-000-0000",
            id: 1835051002,
            Batch: "2018-2021",
            Timing: "E",
           
        }, {
            Name: "Himanshu Kumar",
            Branch: "Automobile Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1845051008,
            phoneNumber: "000-000-0000",
            id: 1845051008,
            Batch: "2018-2021",
            Timing: "M",
        
        }, {
            Name: "Kunal Kumar Shukla",
            Branch: "Automobile Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1845051001,
            phoneNumber: "000-000-0000",
            id:1845051001 ,
            Batch: "2018-2021",
            Timing: "M",
        
        }, {
            Name: "Shubham Kumar",
            Branch: "Automobile Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1845051004,
            phoneNumber: "000-000-0000",
            id: 1845051004,
            Batch: "2018-2021",
            Timing: "M",
          
        }, {
            Name: "Abhishek Rai",
            Branch: "Computer Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1835051011,
            phoneNumber: "000-000-0000",
            id: 1835051011,
            Batch: "2019-2022",
            Timing: "E",
       
        }, {
            Name: "Abhishek shah",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1986453004,
            phoneNumber: "000-000-0000",
            id: 1986453004,
            Batch: "2019-2022",
            Timing: "E",

        }, {
            Name: "Akash Kumar Mandal",
            Branch: "Computer Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1835051018,
            phoneNumber: "000-000-0000",
            id: 1835051018,
            Batch: "2019-2022",
            Timing: "E",
    
        }, {
            Name: "Harishankar",
            Branch: "Automobile Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1845051012,
            phoneNumber: "000-000-0000",
            id:1845051012 ,
            Batch: "2019-2022",
            Timing: "E",
   
        }, {
            Name: "Harsh Vardhan",
            Branch: "Computer Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1835051014,
            phoneNumber: "000-000-0000",
            id: 1835051014,
            Batch: "2019-2022",
            Timing: "M",
   
        }, {
            Name: "Prashant Saxena",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1986453006,
            phoneNumber: "000-000-0000",
            id: 1986453006,
            Batch: "2019-2022",
            Timing: "M",
   
        }, {
            Name: "Himanshu Kumar",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1986453014,
            phoneNumber: "000-000-0000",
            id:1986453014 ,
            Batch: "2020-2023",
            Timing: "E",
   
        }, {
            Name: "Mukul Chaudhary",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1986453021,
            phoneNumber: "000-000-0000",
            id: 1986453021,
            Batch: "2020-2023",
            Timing: "E",
    
        }, {
            Name: "Nancy Agarwal",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1986453017,
            phoneNumber: "000-000-0000",
            id:1986453017 ,
            Batch: "2020-2023",
            Timing: "E",

        }, {
            Name: "Abhishek shah",
            Branch: "Automobile Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1845051018,
            phoneNumber: "000-000-0000",
            id: 1845051018,
            Batch: "2020-2023",
            Timing: "M",
    
        }, {
            Name: "Ankit kumar",
            Branch: "Automobile Engineering",
            currentSemester: 2,
            isPersuing:false,
            rollNumber: 1845051016,
            phoneNumber: "000-000-0000",
            id: 1845051016,
            Batch: "2020-2023",
            Timing: "M",
    
        }, {
            Name: "Amit kumar yadav",
            Branch: "Automobile Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1845051005,
            phoneNumber: "000-000-0000",
            id: 1845051005,
            Batch: "2018-2021",
            Timing: "E",
      
        }, {
            Name: "Anishay Kumar",
            Branch: "Computer Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1835051007,
            phoneNumber: "000-000-0000",
            id: 1835051007,
            Batch: "2018-2021",
            Timing: "E",
   
        }, {
            Name: "Ankit Jain",
            Branch: "Automobile Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1845051002,
            phoneNumber: "000-000-0000",
            id: 1845051002,
            Batch: "2018-2021",
            Timing: "E",
      
        }, {
            Name: "Ujjwal Aditya",
            Branch: "Automobile Engineering",
            currentSemester: 4,
            isPersuing:true,
            rollNumber: 1845051007,
            phoneNumber: "000-000-0000",
            id: 1845051007,
            Batch: "2018-2021",
            Timing: "E",
        
        }, {
            Name: "Kunal Chaudhary",
            Branch: "Computer Engineering",
            currentSemester: 4,
            isPersuing:true,
            rollNumber: 1835051009,
            phoneNumber: "000-000-0000",
            id:1835051009 ,
            Batch: "2018-2021",
            Timing: "M",
     
        }, {
            Name: "Muskan Singh",
            Branch: "Computer Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1835051003,
            phoneNumber: "000-000-0000",
            id: 1835051003,
            Batch: "2018-2021",
            Timing: "M",
      
        }, {
            Name: "Satyam gupta",
            Branch: "Computer Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1835051005,
            phoneNumber: "000-000-0000",
            id:1835051005 ,
            Batch: "2018-2021",
            Timing: "M",
      
        }, {
            Name: "Nancy Agarwal",
            Branch: "Computer Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1835051015,
            phoneNumber: "000-000-0000",
            id:1835051015 ,
            Batch: "2019-2022",
            Timing: "E",
     
        }, {
            Name: "Pawan Kumar",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1986453005,
            phoneNumber: "000-000-0000",
            id: 1986453005,
            Batch: "2019-2022",
            Timing: "E",
       
        }, {
            Name: "Shrijan",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1986453007,
            phoneNumber: "000-000-0000",
            id: 1986453007,
            Batch: "2019-2022",
            Timing: "E",
      
        }, {
            Name: "Sushma Kumari",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1986453009,
            phoneNumber: "000-000-0000",
            id: 1986453009,
            Batch: "2019-2022",
            Timing: "E",
      
        }, {
            Name: "Kumar Ashish",
            Branch: "Computer Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1835051010,
            phoneNumber: "000-000-0000",
            id: 1835051010,
            Batch: "2019-2022",
            Timing: "M",
       
        }, {
            Name: "Mausami Bharti",
            Branch: "Computer Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1835051017,
            phoneNumber: "000-000-0000",
            id:1835051017 ,
            Batch: "2019-2022",
            Timing: "M",
        
        }, {
            Name: "Nishant Kumar",
            Branch: "Computer Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1835051012,
            phoneNumber: "000-000-0000",
            id: 1835051012,
            Batch: "2019-2022",
            Timing: "M",
         
        }, {
            Name: "Pawan Kumar",
            Branch: "Automobile Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1845051019,
            phoneNumber: "000-000-0000",
            id: 1845051019,
            Batch: "2020-2023",
            Timing: "E",
        
        }, {
            Name: "Amit kumar yadav",
            Branch: "Automobile Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1845051017,
            phoneNumber: "000-000-0000",
            id: 1845051017,
            Batch: "2020-2023",
            Timing: "M",
        
        }, {
            Name: "Mausami Bharti",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1986453018,
            phoneNumber: "000-000-0000",
            id: 1986453018,
            Batch: "2020-2023",
            Timing: "M",
           
        }, {
            Name: "Nitin pawar",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1986453013,
            phoneNumber: "000-000-0000",
            id:1986453013 ,
            Batch: "2020-2023",
            Timing: "M",
        
        }, {
            Name: "Raushan raj",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1986453015,
            phoneNumber: "000-000-0000",
            id:1986453015 ,
            Batch: "2020-2023",
            Timing: "M",
         
        }, {
            Name: "Sudhanshu Ranjan",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1986453020,
            phoneNumber: "000-000-0000",
            id: 1986453020,
            Batch: "2020-2023",
            Timing: "M",
     
        }, {
            Name: "Sushma Kumari",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 4,
            isPersuing:false,
            rollNumber: 1986453011,
            phoneNumber: "000-000-0000",
            id: 1986453011,
            Batch: "2020-2023",
            Timing: "M",
        
        }, {
            Name: "Suraj kumar",
            Branch: "Automobile Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1845051003,
            phoneNumber: "000-000-0000",
            id: 1845051003,
            Batch: "2018-2021",
            Timing: "E",

        }, {
            Name: "Akash Kumar Mandal",
            Branch: "Computer Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1835051001,
            phoneNumber: "000-000-0000",
            id: 1835051001,
            Batch: "2018-2021",
            Timing: "M",
     
        }, {
            Name: "Ashwini Kumar Singh",
            Branch: "Automobile Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1845051009,
            phoneNumber: "000-000-0000",
            id: 1845051009,
            Batch: "2018-2021",
            Timing: "M",
        
        }, {
            Name: "Nitin pawar",
            Branch: "Automobile Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1845051006,
            phoneNumber: "000-000-0000",
            id: 1845051006,
            Batch: "2018-2021",
            Timing: "M",
         
        }, {
            Name: "Raushan raj",
            Branch: "Computer Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1835051008,
            phoneNumber: "000-000-0000",
            id: 1835051008,
            Batch: "2018-2021",
            Timing: "M",
     
        }, {
            Name: "Vivek kumar singh",
            Branch: "Computer Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1835051006,
            phoneNumber: "000-000-0000",
            id: 1835051006,
            Batch: "2018-2021",
            Timing: "M",
      
        }, {
            Name: "Vinita Kumari",
            Branch: "Computer Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1835051016,
            phoneNumber: "000-000-0000",
            id: 1835051016,
            Batch: "2019-2022",
            Timing: "E",
      
        }, {
            Name: "Ankit Dubey",
            Branch: "Computer Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1835051013,
            phoneNumber: "000-000-0000",
            id: 1835051013,
            Batch: "2019-2022",
            Timing: "M",
          
        }, {
            Name: "Ankit kumar",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1986453003,
            phoneNumber: "000-000-0000",
            id: 1986453003,
            Batch: "2019-2022",
            Timing: "M",
     
        }, {
            Name: "Kishan kumar Gupta",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1986453002,
            phoneNumber: "000-000-0000",
            id: 1986453002,
            Batch: "2019-2022",
            Timing: "M",
       
        }, {
            Name: "Pushkar Kumar",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1986453010,
            phoneNumber: "000-000-0000",
            id: 1986453010,
            Batch: "2019-2022",
            Timing: "M",
    
        }, {
            Name: "Satyam gupta",
            Branch: "Automobile Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1845051013,
            phoneNumber: "000-000-0000",
            id: 1845051013,
            Batch: "2019-2022",
            Timing: "M",
       
        }, {
            Name: "Shrijan",
            Branch: "Automobile Engineering",
            currentSemester: 6,
            isPersuing:true,
            rollNumber: 1845051011,
            phoneNumber: "000-000-0000",
            id: 1845051011,
            Batch: "2019-2022",
            Timing: "M",
        
        }, {
            Name: "Ujjwal Aditya",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 6,
            isPersuing:true,
            rollNumber: 1986453001,
            phoneNumber: "000-000-0000",
            id:1986453001 ,
            Batch: "2019-2022",
            Timing: "M",
        
        }, {
            Name: "Vishesh shukla",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 6,
            isPersuing:true,
            rollNumber: 1986453008,
            phoneNumber: "000-000-0000",
            id: 1986453008,
            Batch: "2019-2022",
            Timing: "M",
       
        }, {
            Name: "Anishay Kumar",
            Branch: "Automobile Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1845051015,
            phoneNumber: "000-000-0000",
            id: 1845051015,
            Batch: "2020-2023",
            Timing: "E",
         
        }, {
            Name: "Ashwini Kumar Singh",
            Branch: "Automobile Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1845051020,
            phoneNumber: "000-000-0000",
            id: 1845051020,
            Batch: "2020-2023",
            Timing: "E",
        
        }, {
            Name: "Muskan Singh",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1986453012,
            phoneNumber: "000-000-0000",
            id: 1986453012,
            Batch: "2020-2023",
            Timing: "E",
       
        }, {
            Name: "Kumar Ashish",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1986453016,
            phoneNumber: "000-000-0000",
            id: 1986453016,
            Batch: "2020-2023",
            Timing: "M",
         
        }, {
            Name: "Vaishali Singh",
            Branch: "Electronics and Communication Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1986453019,
            phoneNumber: "000-000-0000",
            id: 1986453019,
            Batch: "2020-2023",
            Timing: "M",
         
        }, {
            Name: "Vivek kumar singh",
            Branch: "Automobile Engineering",
            currentSemester: 6,
            isPersuing:false,
            rollNumber: 1845051014,
            phoneNumber: "000-000-0000",
            id: 1845051014,
            Batch: "2020-2023",
            Timing: "M",
         
        }],
        columns: [
            { field: 'rollNumber', headerName: 'Roll Number', width: 140 },
            { field: 'Name', headerName: 'Name', width: 180 },
            { field: 'currentSemester', headerName: 'Semester', width: 120 },
            { field: 'isPersuing', headerName: 'Is Persuing', width: 140 },
            {
              field: 'phoneNumber',
              headerName: 'Phone Number',
              sortable: false,
              width: 150,
            },
            {field: 'Batch', headerName: 'Batch', width: 150},
            {field: 'Branch', headerName: 'Branch', width: 200}
          ],
          selectedData: [],
          tableData: [],
          selectedBranch: '',
          branches : [],
       }

       
       componentDidMount(){
        if(this.state.branches.length === 0){
            const branches = [...new Set(this.state.data.map(branch => branch.Branch + ' | ' + branch.Timing + ' | ' + branch.Batch + ' | ' + branch.currentSemester))].sort()
            this.setState({branches: branches})
            }
        }

        onBranchChangeHandler = (event) => {
            const filters = event.target.textContent.split(' | ')
            const filteredData = this.state.data.filter(data => (data.Branch === filters[0] && data.Timing === filters[1] && data.Batch === filters[2] && data.currentSemester === parseInt(filters[3])))
            this.setState({tableData: filteredData, selectedBranch: event.target.textContent, selectedData: [] })
        }


       onSelectRowHandler = (row) => {
            let selectedRows = [...this.state.selectedData]
            selectedRows.push(row)
            this.setState({selectedData: selectedRows})
        }

       onModalOpenHandler = (target) => {
           this.setState({ modalEventName: target })
       }

       onModalCloseHandler = () => {
           this.setState({modalEventName: ''})
       }



   render(){

    const paperStyle={
        borderRadius: '20px',
        minHeight: '80vh',
        padding: 20
    }

       return (
           <React.Fragment>
            <Buttons 
                branches={this.state.branches} 
                branchChange={this.onBranchChangeHandler}
                modalName={this.state.modalEventName} 
                onModalOpen={this.onModalOpenHandler} 
                onModalClose={this.onModalCloseHandler} 
                selectedData={this.state.selectedData}
                branch={this.state.selectedBranch}
                tableData={this.state.tableData}
                />
            <Paper extraStyles={paperStyle}>
            <DataGrid colums={this.state.columns} data={this.state.tableData} select={this.onSelectRowHandler}/>
            </Paper>
            </React.Fragment>
       )
   }
}

export default StudentUpdates