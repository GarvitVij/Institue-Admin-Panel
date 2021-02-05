import React, { Component } from 'react';
import ValidateReceipt from '../../component/Receipt/ValidateReceipt/ValidateReceipt'
import ShowReceipts from '../../component/Receipt/ShowReceipts/ShowReceipts'
import Button from '@material-ui/core/Button';
import Typography from '../../component/MUI/Typography/Typography'         
import classes from './Receipts.module.css'

class Receipts extends Component {
       state = {
           isValidate: true,
           branch: '',
           semester: '',
           rollNumber: 0,
           chalanNumber: ''
       }
   
       toggleHandler = () =>{
           this.setState((state)=>({isValidate: !state.isValidate}))
       }

       onSelectHandler = (id,value) => {
        this.setState({[id]: value })
       }

       onInputHandler = (event) => {
            this.setState({[event.target.id] : event.target.value})
       }

       onSubmitHandler = () => {
           console.log('Request Goes here')
       }


     render(){
        let component = <ValidateReceipt
            onSelectHandler={this.onSelectHandler}
            onInputHandler={this.onInputHandler}
            rollNumber={this.state.rollNumber}
            chalanNumber={this.state.chalanNumber}
            branch={this.state.branch}
            semester={this.state.semester}
            onSubmit={this.onSubmitHandler}
        />
        let heading = "Validate Receipt"
        let buttonText = "Toggle to show receipts"
        if(!this.state.isValidate){
            heading = "Receipt Logs"
            component = <ShowReceipts />
            buttonText = "Toggle to validate receipt"
        }

        const TypographyStyles = {align: 'center', variant:"h2"}

       return (
           <React.Fragment>
                <Typography styles={TypographyStyles}>{heading}</Typography>
                <div className={classes.Center}>
                    <Button variant="contained" color="primary" onClick={this.toggleHandler}>{buttonText}</Button>
                </div>
                {component}
           </React.Fragment>
       )
   }
}

export default Receipts