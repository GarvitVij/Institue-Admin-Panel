import React from 'react';
import DescriptionAlerts from '../MUI/Alerts/Alert'
import EmptyLogs from './EmptyLogs/EmptyLogs'

const LogsList = (props) => {
    let logs = <EmptyLogs title="Its So Empty Here !"/>
    let moreLogs = null
    if(props.logs.length > 0){
        logs = props.logs.map((log,index) => <DescriptionAlerts key={index} code={log.code} action={log.action} from={log.from} message={log.message} time={log.time} />)
    }
    if(props.logs.length < 3 && props.logs.length !== 0) {
        moreLogs = <EmptyLogs title="I have some logs" />
    }

    return (
        <React.Fragment>
        {logs}
        {moreLogs}
        </React.Fragment>
    )
}

export default LogsList