import React from 'react';
import Paper from '../../MUI/Paper/Paper'
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& ..MuiDataGrid-row.Mui-selected': {
          backgroundColor: 'rgba(33,22,101,0.30)'
      },
    },
  }));
  

const ShowReceipts = (props) => {

    
    const classes = useStyles();

    const paperStyle={
        borderRadius: '2px',
        height: '100vh',
        padding: 20,
        margin: '2%'
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
      ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

    return(
        <Paper extraStyles={paperStyle}>
            <div style={{ height: '100%', width: 'auto' }}>
                <DataGrid className={classes.root} rows={rows} columns={columns}  showToolbar />
            </div>
        </Paper>
    )
    
}

export default ShowReceipts