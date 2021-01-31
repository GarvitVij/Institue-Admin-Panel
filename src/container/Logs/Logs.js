import React, { Component } from 'react';
import Typography from '../../component/MUI/Typography/Typography';
import LogsList from '../../component/Logs/LogsList'
import LogControls from '../../component/Logs/LogControls/LogControls'

class Logs extends Component {
    state = {
        logs:[{
            code: 200,
            message: "Task Completed Successfuly",
            from: "Admin 1",
            action: "Create Student",
            time: 1612016445 
        }, {
            code: 400,
            message: "Oops the action failed ! Something went Wrong",
            from: "Admin 2",
            action: "Delete Batch Students",
            time: 1612016445 
        }, {
            code: 500,
            message: "Server Error ! cant handle the request now !",
            from: "Admin 3",
            action: "Delete Student",
            time: 1612016445 
        },{
            code: 204,
            message: "Update Successfull !",
            from: "Admin 2",
            action: "Semester Update",
            time: 1612016445 
        },{
            code: 204,
            message: "Update Successfull !",
            from: "Admin 2",
            action: "Semester Update",
            time: 1612016445 
        },{
            code: 204,
            message: "Update Successfull !",
            from: "Admin 2",
            action: "Semester Update",
            time: 1612016445 
        }
        ],
        settings: {
            byCode: 200,
            byAdmin: 'adminOne',
            byTask: 'createStudent',
            timestamp: 0
        }
    }

    settingsChangeHandler = (event, id) => {
        let ee = event._d
         ee = Date(ee)
        console.log(new Date(ee).getTime())
    }

    render(){

        const TypographyHeadingStyles = {variant:"h2", align:"center"}

        return (
            <React.Fragment>
            <Typography styles={TypographyHeadingStyles}>Logs</Typography>
            <LogControls clicked={(event)=>this.settingsChangeHandler(event, '1')} values={this.state.settings} />
            <LogsList logs={this.state.logs} />
            </React.Fragment>
            )
    }
}

export default Logs