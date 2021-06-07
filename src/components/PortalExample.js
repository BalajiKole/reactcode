import React from 'react'
import ReactDOM from 'react-dom'

/* function PortalExample() {
    return (
        <div>
            <h1>Welcome to React</h1>
        </div>
    )
}  */
 function PortalExample() {
    return ReactDOM.createPortal(
		<h1>Welcome to React</h1>,
		document.getElementById('p-root')
	)
}
export default PortalExample


/* ReactDOM.createPortal(<h1>Welcome to React</h1>,document.getElementById('p-root')
 1st parameter is any thing string, html,jsx,component etc
 2nd parameter is id where to load data i.e dom node name i.e id 

 use this link where we can use portal
 https://codesandbox.io/s/00254q4n6p - see without portal break modal remove cretaeportal()and dom name because style- maxwith is 400 its limited set
https://codepen.io/gaearon/pen/jGBWpE - event bubling 
*/