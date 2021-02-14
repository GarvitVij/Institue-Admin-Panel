import React from 'react';
import { FilePicker } from 'react-file-picker'
import classes from './Buttons.module.css'
import Modal from '../../MUI/Modal/Modal';
import Button from '@material-ui/core/Button';
import DeleteBatch from './DeleteBatch/DeleteBatch'
import DeleteStudent from './DeleteStudent/DeleteStudent'
import PromoteHold from './PromoteHold/PromoteHold'
import { CSVLink } from "react-csv";

   const Buttons = (props) => {
    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
      ];
       return(
        <div className={classes.Buttons}>
        <Button variant="contained" color="primary">
            Semester
        </Button>
        <FilePicker
        extensions={['.gtbpi']}
        onChange={FileObject => {console.log(FileObject)}}
        onError={errMsg => {console.log(errMsg)}}
        >
            <Button variant="contained" color="primary">
                Add Students
            </Button>
        </FilePicker>
        <Modal heading="Delete Batch" modalState={props.modalName === "Delete Batch" ? true : false} onModalOpen={props.onModalOpen} onModalClose={props.onModalClose}><DeleteBatch /></Modal>
        <Modal heading="Delete student" modalState={props.modalName === "Delete student" ? true : false} onModalOpen={props.onModalOpen} onModalClose={props.onModalClose}><DeleteStudent students={[{rollNumber : 1, name: 'ar', semester: 2, batch: "CS", isLateralEntry: true}]} /></Modal>
        <Modal heading="Promote / Hold" modalState={props.modalName === "Promote / Hold" ? true : false} onModalOpen={props.onModalOpen} onModalClose={props.onModalClose}><PromoteHold students={[{rollNumber : 1, name: 'ar', semester: 2, batch: "CS", isLateralEntry: true}]} /></Modal>
        <CSVLink data={csvData}><Button variant="contained" color="primary">Backup CSV</Button></CSVLink>
    </div>
    )}

export default Buttons