import React, { Component } from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout"
import Cookies from 'js-cookie'; 
import Login from './container/Login/Login'


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
       let route = <Login refresh={this.checkValidity}/>
        // let route = (
        //     <Switch>
        //         <Route exact path="/reset-password/:id" component={ResetPassword} />
        //         <Route exact path="/forgot-password" component={Password}/>
        //         <Route exact path="/FAQ" component={FAQ}/>
        //         <Route exact path="/" render={()=><Login refresh={this.checkValidity} />} />
        //         <Route component={FourOFour} />
        //     </Switch>
        // )

        if(this.state.isAuthenticated){
            route = <Layout />
        }


       return (
            <div>
                {route}
            </div>
           )
   }
}

export default App;
