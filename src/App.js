import React, { Component } from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout"
import Cookies from 'js-cookie'; 
import Login from './container/Login/Login'
import Password from './container/Password/Password';
import ResetPassword from './container/ResetPassword/ResetPassword'
import FourOFour from './utils/404/FourOFour'
import { Route } from 'react-router-dom'
import Footer from './component/UI/Footer/Footer'

class App extends Component {
    state = {
        isAuthenticated : false
    }

    
    checkValidity = () => {
        if(Cookies.get('token')){
            this.setState({isAuthenticated: true})
        }
    }

    componentDidMount(){
        if(Cookies.get('token')){
            this.setState({isAuthenticated: true})
        }
    }


   render(){
       let route = (
           <switch>
            <Route exact path="/" render={()=><Login refresh={this.checkValidity}/ >}/>
            <Route exact path="/forgot-password" component={Password}/>
            <Route exact path="/reset-password/:id" component={ResetPassword} />
            <Route component={FourOFour} />
           </switch>
       )

        if(this.state.isAuthenticated){
            route = <Layout />
        }


       return (
            <div>
                {route}
                {this.state.isAuthenticated ? null : <Route component={Footer} /> } 
            </div>
           )
   }
}

export default App;
