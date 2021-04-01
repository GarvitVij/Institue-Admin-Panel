import React, { Component } from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout"
import Login from './component/Login/Login'
import Password from './component/Password/Password'
import ResetPassword from './component/ResetPassword/ResetPassword'

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
            <Switch>
                <Route exact path="/reset-password/:id" component={ResetPassword} />
                <Route exact path="/forgot-password" component={Password}/>
                <Route exact path="/FAQ" component={FAQ}/>
                <Route exact path="/" render={()=><Login refresh={this.checkValidity} />} />
                <Route component={FourOFour} />
            </Switch>
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
