import React from 'react';
import ButtonGroup from '../../MUI/ButtonGroup/ButtonGroup'
import SelectButton from '../../MUI/Select/Select'
import DatePicker from '../../MUI/DateTimePicker/Date/Date'
import TimePicker from '../../MUI/DateTimePicker/Time/Time'
import Button from '@material-ui/core/Button';
import Modal from '../../MUI/Modal/Modal'

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
        <Modal heading="Settings">
            <ButtonGroup>
                <SelectButton {...byCode} clicked={props.filterHandler}  value={props.selectDefaultValues.byCode}/>
                <SelectButton {...byTask} clicked={props.filterHandler} value={props.selectDefaultValues.byTask}/>
                <SelectButton {...byAdmin} clicked={props.filterHandler} value={props.selectDefaultValues.byAdmin}/>
                <DatePicker clicked={props.timeHandler} />
                <TimePicker clicked={props.timeHandler} />
                <Button style={{margin:'3%'}} variant="contained" color="primary">Sort</Button>
                <Button style={{margin:'3%'}} variant="contained" color="primary">Search</Button>
            </ButtonGroup>
        </Modal>
    )  
}

export default LogControls