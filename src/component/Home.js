import React, { Component } from 'react'
import Logout from './Logout'
import Login from './Login'
import DispalyMessage from './DispalyMessage'

export class Home extends Component {
   
    constructor(props) 
    { 
        super(props) 
  
        this.state = {isLoggedIn : false}
  
        this.ifLoginClicked = this.ifLoginClicked.bind(this) 
        this.ifLogoutClicked = this.ifLogoutClicked.bind(this)
    } 
  
    ifLoginClicked() 
    { 
        this.setState({isLoggedIn : true}) 
    } 
  
    ifLogoutClicked() 
    { 
        this.setState({isLoggedIn : false}) 
    } 
  
    render(){ 
  
        return( 
  
            <div> 
  
                 <DispalyMessage isLoggedIn = {this.state.isLoggedIn}/> 
                  
               

                 { 
                    (this.state.isLoggedIn)?( 
                    <Logout clickHandler = {this.ifLogoutClicked} /> 
                    ) : ( 
                    <Login clickHandler = {this.ifLoginClicked} /> 
                    ) 
                }  

                {/*  { 
                    (this.state.isLoggedIn)?( 
                    <button onClick={this.ifLogoutClicked}><h1>Logout</h1></button>
                    ) : ( 
                   <button onClick={this.ifLoginClicked}><h1>Login</h1></button> 
                    ) 
                }  */}
  
            </div> 
                  
            )
    } 
}

export default Home
