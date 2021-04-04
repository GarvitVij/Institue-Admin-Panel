import React, { Component } from 'react';
import Typography from '../../component/MUI/Typography/Typography';
import LogsList from '../../component/Logs/LogsList'
import LogControls from '../../component/Logs/LogControls/LogControls'

class Logs extends Component {

        state = {
            logs:[{
                code: 200,
                message: "Task Completed Successfuly",
                from: "adminOne",
                action: "Create Student",
                time: 1612016445000 
            }, {
                code: 400,
                message: "Oops the action failed ! Something went Wrong",
                from: "adminTwo",
                action: "Delete Batch Students",
                time: 1612016445000 
            }, {
                code: 500,
                message: "Server Error ! cant handle the request now !",
                from: "adminThree",
                action: "Delete Student",
                time: 1612016445000 
            },{
                code: 204,
                message: "Update Successfull !",
                from: "adminOne",
                action: "Semester Update",
                time: 1612016445000 
            },{
                code: 204,
                message: "Update Successfull !",
                from: "adminTwo",
                action: "Semester Update",
                time: 1612557712182
            },{
                code: 204,
                message: "Update Successfull !",
                from: "adminThree",
                action: "Semester Update",
                time: 1612016445000 
            }
            ],
            filteredLogs: [],
            filters: {
                byCode: '',
                byAdmin: '',
                byTask: '',
            },
            timestamps:{
                from: 0,
                to: 0
            },
            modal: false,
    }

    onModalOpenHandler = () => {
        this.setState({modal: true})
    }

    onModalCloseHandler = () => {
        this.setState({modal:false})
    }

    onFilterChangeHandler = (id,value) => {
        const updateFilter = {...this.state.filters}
        updateFilter[id] = value
        this.setState({filters: updateFilter}) 
    }

    onTimestampChangeHandler = (date,id) => {
        const updatedTimestamps = {...this.state.timestamps}
        updatedTimestamps[id] = date ? new Date(date._d).getTime() : 0
        this.setState({timestamps: updatedTimestamps})
    }

    onSort = () => {
        let filteredLogs = this.state.logs
            .filter(log => log.code ===  (this.state.filters.byCode !== '' ? this.state.filters.byCode : log.code))
            .filter(log => (log.action.charAt(0).toLowerCase() + log.action.slice(1).replaceAll(' ','')) === (this.state.filters.byTask !== '' ? this.state.filters.byTask : log.action.charAt(0).toLowerCase() + log.action.slice(1).replaceAll(' ','')))
            .filter(log => log.from === (this.state.filters.byAdmin !== '' ? this.state.filters.byAdmin : log.from))
            .filter(log => log.time >= this.state.timestamps.from && log.time <= (this.state.timestamps.to === 0 ? new Date():this.state.timestamps.to))
        this.setState({filteredLogs: filteredLogs, modal: false})
    }

    onSearch = () => {
        console.log("Here Goes Request")
        this.setState({modal: false})
    }

    componentDidMount(){}

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
                    modal = { this.state.modal }
                    onModalOpen={this.onModalOpenHandler}
                    onModalClose={this.onModalCloseHandler}
                    minDate={this.state.timestamps.from}
                    onSort={this.onSort}
                    isToDisable={this.state.isToDisable}
                    onSearch={this.onSearch}
                />
                <LogsList logs={this.state.filteredLogs.length === 0 ? this.state.logs : this.state.filteredLogs} />
            </React.Fragment>
            )
    }
}

export default Logs