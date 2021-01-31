import React, { Component } from 'react';
import Typography from '../../component/MUI/Typography/Typography';
import LogsList from '../../component/Logs/LogsList'
import LogControls from '../../component/Logs/LogControls/LogControls'
import moment from 'moment'

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
            filters: {
                byCode: 200,
                byAdmin: 'adminOne',
                byTask: 'createStudent',
            },
            timestamps:{
                datetstamp: 0,
                timestamp: 0
            }
    }

    onFilterChangeHandler = (id,value) => {
        const updateFilter = {...this.state.filters}
        updateFilter[id] = value
        this.setState({filters: updateFilter}) 
    }

    onDateChangeHandler = (date) => {
        const Dates = moment(date._d.toString()).startOf('day').unix()
        console.log(Dates)
    }

    onTimeChangeHandler = (date) => {
        const Dates = moment(date._d.toISOString()).unix()
        console.log(Dates)
    }

    render(){
        const TypographyHeadingStyles = {variant:"h2", align:"center"}
        return (
            <React.Fragment>
            <Typography styles={TypographyHeadingStyles}>Logs</Typography>
            <LogControls 
                filterHandler={this.onFilterChangeHandler}
                DateHandler={(event) => this.onDateChangeHandler(event)} 
                timeHandler={(event) => this.onTimeChangeHandler(event)}
                selectDefaultValues={this.state.filters} 
            />
            <LogsList logs={this.state.logs} />
            </React.Fragment>
            )
    }
}

export default Logs