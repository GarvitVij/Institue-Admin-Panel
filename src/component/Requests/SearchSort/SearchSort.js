import React from 'react';
import Modal from '../../MUI/Modal/Modal'
import Select from '../../MUI/Select/Select'
import TextField from '../../MUI/TextFields/TextFields'
import Button from  '@material-ui/core/Button';

   const SearchSort = (props) => {
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

    return (
        <Modal heading="Search & Sort" styles={{width:'100%', flexDirection:'column'}}>
        <TextField fullWidth placeholder="RollNumbers"/>
        <Select {...branch} />
        <Select {...semester}/>
        <div style={{width: '100%', justifyContent:'space-evenly', display:'flex',margin:'10px'}}>
        <Button variant="contained" color="primary" disableElevation>
            Sort
        </Button>
        <Button variant="contained" color="primary" disableElevation>
            Search
        </Button>
        </div>
        </Modal>
    )
    }

export default SearchSort