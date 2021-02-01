import React, { Component } from 'react';
import ValidateReceipt from '../../component/Receipt/ValidateReceipt/ValidateReceipt'
import ShowReceipts from '../../component/Receipt/ShowReceipts/ShowReceipts'
import Button from '@material-ui/core/Button';
import Typography from '../../component/MUI/Typography/Typography'         
import classes from './Receipts.module.css'

class Receipts extends Component {
       state = {
           isValidate: true
       }
   
       toggleHandler = () =>{
           this.setState((state)=>({isValidate: !state.isValidate}))
       }


     render(){
        let component = <ValidateReceipt />
        let heading = "Validate Receipt"
        let buttonText = "Toggle to show receipts"
        if(!this.state.isValidate){
            heading = "Receipt Logs"
            component = <ShowReceipts />
            buttonText = "Toggle to validate receipt"
        }

       return (
           <React.Fragment>
                <Typography styles={{align: 'center', variant:"h2"}}>{heading}</Typography>
                <div className={classes.Center}><Button variant="contained" color="primary" onClick={this.toggleHandler}>{buttonText}</Button></div>
                {component}
           </React.Fragment>
       )
   }
}

export default Receipts