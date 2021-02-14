import React from 'react';
import { FilePicker } from 'react-file-picker'
import classes from './Buttons.module.css'
import Modal from '../../MUI/Modal/Modal';
import Button from '@material-ui/core/Button';
import DeleteBatch from './DeleteBatch/DeleteBatch'
import DeleteStudent from './DeleteStudent/DeleteStudent'
import PromoteHold from './PromoteHold/PromoteHold'
import { CSVLink } from "react-csv";
import {useState} from 'react'
import Drawer from '../../MUI/Drawer/Drawer'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

   const Buttons = (props) => {

    
    const [open, toggleDrawer] = useState(false)


       return(
        <div className={classes.Buttons}>
        <Button variant="contained" color="primary" onClick={()=>toggleDrawer({open: true})}>
            Semester
        </Button>
        <Drawer drawerSide="right" isOpen={open} closeHandler={() => toggleDrawer(!open)} >
        {props.branches.map( branch => 
            <ListItem button onClick={(event) => props.branchChange(event)}>
            <ListItemText primary={branch} />
          </ListItem>
        )}
    </Drawer>
        <FilePicker
        extensions={['.gtbpi']}
        onChange={FileObject => {console.log(FileObject)}}
        onError={errMsg => {console.log(errMsg)}}
        >
            <Button variant="contained" color="primary">
                Add Students
            </Button>
        </FilePicker>
        <Modal heading="Delete Batch" modalState={props.modalName === "Delete Batch" ? true : false} onModalOpen={props.onModalOpen} onModalClose={props.onModalClose}><DeleteBatch batch={props.branch} close={props.onModalClose}/></Modal>
        <Modal heading="Delete student" modalState={props.modalName === "Delete student" ? true : false} onModalOpen={props.onModalOpen} onModalClose={props.onModalClose}><DeleteStudent students={props.selectedData} /></Modal>
        <Modal heading="Promote / Hold" modalState={props.modalName === "Promote / Hold" ? true : false} onModalOpen={props.onModalOpen} onModalClose={props.onModalClose}><PromoteHold students={props.selectedData} /></Modal>
        <CSVLink data={props.tableData}><Button variant="contained" color="primary">Backup CSV</Button></CSVLink>
    </div>
    )}

export default Buttons