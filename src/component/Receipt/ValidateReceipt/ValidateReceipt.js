import React from 'react';
import Paper from '../../MUI/Paper/Paper'
import TextField from '@material-ui/core/TextField';
import SelectButton from '../../MUI/Select/Select'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      minWidth: '50%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
  },
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
            {value: 'semOne', text: 'Semester One'},
            {value: 'semTwo', text: 'Semester Two'},
            {value: 'semThree', text: 'Semester Three'},
            {value: 'semfour', text: 'Semester Four'},
            {value: 'semFive', text: 'Semester Five'},
            {value: 'semSix', text: 'Semester Six'},
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
            <SelectButton {...branch} />
            <SelectButton {...semester}/>
            <TextField fullWidth/>
            <TextField/>
            <div style={{display:'flex', justifyContent:'center'}}><Button variant="contained" color="primary" style={{margin:'3%'}}>Submit</Button></div>
            </div>
            </Paper>
    )
   }

export default ValidateReceipts