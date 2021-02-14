import React, { Component } from 'react';
import DataGrid from '../../component/MUI/DataGrid/DataGrid'
import Paper from '../../component/MUI/Paper/Paper'
import Buttons from '../../component/StudentUpdates/Buttons/Buttons'


   class StudentUpdates extends Component {
       state = {
           modalEventName: ''
       }

       onModalOpenHandler = (target) => {
           this.setState({ modalEventName: target })
       }

       onModalCloseHandler = () => {
           this.setState({modalEventName: ''})
       }



   render(){

    const paperStyle={
        borderRadius: '20px',
        minHeight: '80vh',
        padding: 20
    }

       return (
           <React.Fragment>
            <Buttons modalName={this.state.modalEventName} onModalOpen={this.onModalOpenHandler} onModalClose={this.onModalCloseHandler}/>
            <Paper extraStyles={paperStyle}>
            <DataGrid colums={[]} data={[]}/>
            </Paper>
            </React.Fragment>
       )
   }
}

export default StudentUpdates