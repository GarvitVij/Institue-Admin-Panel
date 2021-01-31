import React from "react";
import {DatePicker ,MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

const MUIDatePicker = (props) => {

    const settings = {
        allowKeyboardControl: true,
        autoOk:true,
        variant: 'dialog',
        clearable: true,
        label:"Date",
        value:props.value
    }

    const style={
        width: '100%'
    }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>    
        <DatePicker onChange={props.clicked} {...settings} style={style}/>
        </MuiPickersUtilsProvider>
    )
}

export default MUIDatePicker