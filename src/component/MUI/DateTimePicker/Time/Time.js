import React from "react"
import { TimePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

const MUITimePicker = (props) => {

    const settings={
        allowKeyboardControl: true,
        clearable:true,
        label:"Time",
        value:props.selectedDate,
        variant: "dialog"
    }

    const styles ={
        width: '100%'
    }

    return(
        <MuiPickersUtilsProvider utils={MomentUtils}> 
            <TimePicker onChange={props.clicked} {...settings} style={styles}/>
        </MuiPickersUtilsProvider>
    )
}

export default MUITimePicker