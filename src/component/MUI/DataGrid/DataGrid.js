import React from 'react';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
  } from '@material-ui/data-grid';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
}



const MUIDataGrid = (props) => {
    const columns = props.colums
      
      const rows = props.data;


      return(
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid 
            rows={rows} 
            columns={columns} 
            checkboxSelection={true}
            showToolbar={true}
            components={{
                Toolbar: CustomToolbar,
              }}
            onRowSelected={(row)=>props.select(row)}
            onColumnHeaderClick={(event) => props.selectAll(event)}
            />
        </div>
      )
   }

export default MUIDataGrid