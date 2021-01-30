import React from "react";
import {DateTimePicker,MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import moment from 'moment'

const DateAndTimePicker = (props) => {
    return (
    <MuiPickersUtilsProvider utils={MomentUtils}>    
    <DateTimePicker
    style={{width:'100%'}}
    label="Date & Time"
    allowKeyboardControl={true}
    animateYearScrolling={true}
    autoOk={true}
    disableFuture={props.future}
    value={moment("2013-02-08")}
    onChange={props.clicked}
  /></MuiPickersUtilsProvider>)
}

export default DateAndTimePicker