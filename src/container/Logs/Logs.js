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
            filters: {
                byCode: 200,
                byAdmin: 'adminOne',
                byTask: 'createStudent',
            },
            timestamps:{
                from: 0,
                to: 0
            },
            error: false
    }

    onFilterChangeHandler = (id,value) => {
        const updateFilter = {...this.state.filters}
        updateFilter[id] = value
        this.setState({filters: updateFilter}) 
    }

    onTimestampChangeHandler = (date,id) => {
        const updatedTimestamps = {...this.state.timestamps}
        updatedTimestamps[id] = new Date(date._d).getTime()
        this.setState({timestamps: updatedTimestamps})
    }

    onSort = () => {
        if(!this.state.timestamps.from < this.state.timestamps.to){
            this.setState({error: true})
        }
        console.log('sorting here')
    }

    onSearch = () => {

    }

    render(){

        //Typography inline css
        const TypographyHeadingStyles = {variant:"h2", align:"center"}


        return (
            <React.Fragment>
                <Typography styles={TypographyHeadingStyles}>Logs</Typography>
                <LogControls 
                    filterHandler={this.onFilterChangeHandler}
                    selectDefaultValues={this.state.filters}
                    timeHandler={this.onTimestampChangeHandler}
                    timeDefaultValues={this.state.timestamps} 
                />
                <LogsList logs={this.state.logs} />
            </React.Fragment>
            )
    }
}

export default Logs