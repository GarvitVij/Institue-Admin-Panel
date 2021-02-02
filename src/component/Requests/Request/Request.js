import React from 'react';
import Typography from '../../MUI/Typography/Typography'
import Button from '@material-ui/core/Button';

   const Request = (props) => (
        <div style={{width:'100%'}}>
            <Typography styles={{gutterBottom:true, variant:"h6"}}>Roll Number : {props.rollNumber}</Typography>
            <Typography  styles={{gutterBottom:true, variant:"h6"}}>Name : {props.name}</Typography>
            <Typography  styles={{gutterBottom:true, variant:"h6"}}>Branch : {props.branch}</Typography>
            <Typography  styles={{gutterBottom:true, variant:"h6"}}>Semester : {props.semester}</Typography>
            <Typography  styles={{gutterBottom:true, variant:"h6"}}>Subject( From ) : {props.subjectFrom}  →  Subject( To ) : {props.subjectTo} </Typography>
            <Button fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </div>
   )

export default Request