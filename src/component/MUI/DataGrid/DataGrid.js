import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

   const MUIDataGrid = (props) => {
    const columns = props.colums
      
      const rows = props.data;


      return(
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid 
            rows={rows} 
            columns={columns} 
            checkboxSelection
            showToolbar={true}
            onRowSelected={(row)=>props.select(row)}
            />
        </div>
      )
   }

export default MUIDataGrid