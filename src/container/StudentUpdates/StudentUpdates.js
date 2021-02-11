import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import classes from './StudentUpdates.module.css'
import DataGrid from '../../component/MUI/DataGrid/DataGrid'
import Paper from '../../component/MUI/Paper/Paper'

   class StudentUpdates extends Component {
       state = {}

   render(){

    const paperStyle={
        borderRadius: '20px',
        minHeight: '80vh',
        padding: 20
    }

       return (
           <React.Fragment>
            <div className={classes.StudentUpdatesButtons}>
                <Button variant="contained" color="primary">
                    Semester
                </Button>
                <Button variant="contained" color="primary">
                    Add A Batch
                </Button>
                <Button variant="contained" color="primary">
                Add A Student
                </Button>
                <Button variant="contained" color="primary">
                    Delete A Batch
                </Button> 
                <Button variant="contained" color="primary">
                Delete A Student
                </Button>        
                <Button variant="contained" color="primary">
                    Promote / Hold
                </Button>
                <Button variant="contained" color="primary">
                    Backup CSV
                </Button>
            </div>
            <Paper extraStyles={paperStyle}>
            <DataGrid colums={[]} data={[]}/>
            </Paper>
            </React.Fragment>
       )
   }
}

export default StudentUpdates