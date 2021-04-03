import React, { Component } from 'react';
import ReportControls from '../../component/DeatiledReport/ReportControls/ReportControls'
import Typography from '../../component/MUI/Typography/Typography'
import DataGrid from '../../component/MUI/DataGrid/DataGrid'
import Paper from '../../component/MUI/Paper/Paper'
import axios from '../../axios'
import SnackBar from '../../component/MUI/snackbar/snackbar'

   class DetailedReport extends Component {
       state = {
        columns: [
            { field: 'rollNumber', headerName: 'Roll Number', width: 140 },
            { field: 'name', headerName: 'Name', width: 180 },
            { field: 'currentSemester', headerName: 'Semester', width: 120 },
            { field: 'isLateralEntry', headerName: 'Is Lateral', width: 140 },
            {
              field: 'phoneNumber',
              headerName: 'Phone Number',
              sortable: false,
              width: 150,
            },
            {field: 'email', headerName: 'Email', width: 280},
            {field: 'receipts', headerName: 'Receipts', width: 300 }
          ],
        branches : [],
        selectedBranch: '',
        tableData: [],
        contentFailed: false,
        errorMessage: ""
        }

        componentDidMount(){
            if(this.state.branches.length === 0){
                axios.get('/api/admin/detailStudent/branches', {withCredentials:true}).then(res => {
                    let branchesUpdated = [...this.state.branches]
                    branchesUpdated = res.data.branches
                    this.setState({branches:branchesUpdated })
                }).catch(err => {
                    this.setState({contentFailed: true, errorMessage: err.errorMessage})
                    setTimeout(()=>{
                        this.setState({contentFailed: false, errorMessage: ''})
                    }, 3200)
                })
               
            }
        }


        onChangeHandler = (event) => {
            axios.get('/api/admin/detailStudent/students',{
                withCredentials: true,
                params: {
                    branch: event.target.textContent
                }
            })
            .then(res => {
                res.data.students = res.data.students.map(student => {return {...student, id: student.rollNumber}})
                this.setState({tableData: res.data.students, selectedBranch: event.target.textContent})
            }).catch(err=>{
                this.setState({contentFailed: true, errorMessage: err.errorMessage})
                setTimeout(()=>{
                    this.setState({contentFailed: false, errorMessage: ''})
                }, 3200)
            })
        }

   render(){
    const paperStyle={
        borderRadius: '20px',
        minHeight: '80vh',
        padding: 20
    }

    const TypographyHeadingStyles = {variant:"h2", align:"center"}
    const TypographyTableHeadingStyles = {variant:"h5", align:"center", gutterBottom:true}
       return (
           <React.Fragment>
           <Typography styles={TypographyHeadingStyles}>Detailed Report</Typography>
           <ReportControls branches={this.state.branches} onChange={this.onChangeHandler}/>
           <Paper extraStyles={paperStyle}>
           <Typography styles={TypographyTableHeadingStyles}>{this.state.selectedBranch === '' ? `No branch Selected` : this.state.selectedBranch }</Typography>
           <DataGrid data={this.state.tableData} colums={this.state.columns} />
           </Paper>
           {this.state.contentFailed ? <SnackBar message={this.state.errorMessage} type="error" /> : null} 
           </React.Fragment>
       )
   }
}

export default DetailedReport