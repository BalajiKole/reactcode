import React from 'react'

const Login = (props) => {
    return (
        <div>
            <button onClick = {props.clickHandler}> 
               <h1>Login</h1> 
           </button>
        </div>
    )
}

export default Login
