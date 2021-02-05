import React from 'react';
import SelectButton from '../../MUI/Select/Select'
import DateAndTimePicker from '../../MUI/DateTimePicker/DateAndTimePicker'
import Button from '@material-ui/core/Button';
import Modal from '../../MUI/Modal/Modal'
import classes from './LogsControls.module.css'

const LogControls = (props) => {

    const byCode = {
        title: 'By Code',
        id:'byCode',
        options: [
            {value: 200, text: '200'},
            {value: 400, text: '400'},
            {value: 500, text: '500'},
            {value: 204, text: '204'},
        ]
    }

    const byTask = {
        title: 'By Task',
        id:'byTask',
        options: [
            {value: 'createStudent', text: 'Create Student'},
            {value: 'deleteBatchStudents', text: 'Delete Batch Students'},
            {value: 'deleteStudent', text: 'Delete Student'},
            {value: 'semesterUpdate', text: 'Semester Update'},
        ]
    }

    const byAdmin = {
        title: 'By Admin',
        id:'byAdmin',
        options: [
            {value: 'adminOne', text: 'Admin One'},
            {value: 'adminTwo', text: 'Admin Two'},
            {value: 'adminThree', text: 'Admin Three'},
        ]
    }

    return(
        <Modal heading="Settings" modalState={props.modal} onModalOpen={props.onModalOpen} onModalClose={props.onModalClose}>
            <div className={classes.Center}>
                <SelectButton {...byCode} clicked={props.filterHandler}  value={props.selectDefaultValues.byCode}/>
                <SelectButton {...byTask} clicked={props.filterHandler} value={props.selectDefaultValues.byTask}/>
                <SelectButton {...byAdmin} clicked={props.filterHandler} value={props.selectDefaultValues.byAdmin}/>
                <DateAndTimePicker clicked={props.timeHandler} label="From" id="from" values={props.timeDefaultValues}/>
                <DateAndTimePicker clicked={props.timeHandler} label="To" id="to" values={props.timeDefaultValues} />
                <div className={classes.Buttons}>
                <Button onClick={props.onSort} variant="contained" color="primary">Sort</Button>
                <Button onClick={props.onSearch} variant="contained" color="primary">Search</Button>
                </div>
            </div>
        </Modal>
    )  
}

export default LogControls