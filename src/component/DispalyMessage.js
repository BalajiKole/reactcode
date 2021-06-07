
import React from 'react'

const DispalyMessage = (props) => {
   /*  if (props.isLoggedIn)
        return <h1>Welcome User</h1>
    else
        return <h1>Please Login</h1> */
 return props.isLoggedIn?<h1>Welcome User</h1>:<h1>Please Login</h1>

}

export default DispalyMessage
