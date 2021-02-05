import React from 'react';
import Paper from '../../MUI/Paper/Paper'
import TextField from '@material-ui/core/TextField';
import SelectButton from '../../MUI/Select/Select'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '2% 1%',
      minWidth: '50%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }
}));


const ValidateReceipts = (props) => {

    const branch = {
        title: 'Branch',
        id:'branch',
        options: [
            {value: 'CS-M', text: 'Computer Science Morning'},
            {value: 'CS-E', text: 'Computer Science Evening'},
            {value: 'ENE-M', text: 'Electrical & Communication Morning'},
            {value: 'ENE-E', text: 'Electrical & Communication Evening'},
            {value: 'AM-M', text: 'AutoMobile Morning'},
            {value: 'AM-E', text: 'AutoMobile Evening'},
        ]
    }

    const semester = {
        title: 'Semester',
        id:'semester',
        options: [
            {value: 'semesterOne', text: 'Semester One'},
            {value: 'semesterTwo', text: 'Semester Two'},
            {value: 'semesterThree', text: 'Semester Three'},
            {value: 'semesterfour', text: 'Semester Four'},
            {value: 'semesterFive', text: 'Semester Five'},
            {value: 'semesterSix', text: 'Semester Six'},
            {value: 'additionalAttenpt', text: 'Additional Attempt'},
        ]
    }

    const classes = useStyles();

    const paperStyle={
        borderRadius: '40px',
        height: '100%',
        padding: 20,
        margin: '3% 10%'
    }

    return(
        <Paper extraStyles={paperStyle} bgcolor="white">
        <div className={classes.root}>
            <SelectButton {...branch} value={props.branch} clicked={props.onSelectHandler}/>
            <SelectButton {...semester} value={props.semester} clicked={props.onSelectHandler}/>
            <TextField placeholder="Roll Number" id="rollNumber" value={props.rollNumber} fullWidth onChange={(event)=>{props.onInputHandler(event)}} />
            <TextField placeholder="Chalan Number" id="chalanNumber" value={props.chalanNumber} fullWidth onChange={(event)=>{props.onInputHandler(event)}} />
            <div style={{display:'flex', justifyContent:'center'}}><Button onClick={props.onSubmit} variant="contained" color="primary" style={{margin:'3%'}}>Submit</Button></div>
            </div>
            </Paper>
    )
   }

export default ValidateReceipts