//Inline css InlineCssExample

import React from 'react'
import styles from '../AppStyles.module.css' //for module.css file use
function InlineCssExample() {
    //JavaScript Object
    const applystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      const divStyle = {
        margin: '40px',
        border: '5px solid pink'
      };
      const pStyle = {
        fontSize: '15px',
        textAlign: 'center',
        padding:'20px',
        margin:'50px'
      };
    return (
        <div >
         <h1 style={{color: "red",backgroundColor: "lightblue"}}>Hello React!!!</h1>
            <h1>Welcome TQPP</h1>
            <div style={applystyle}>Hello Jay How are you? </div> 
             <h1 className="error">Error</h1>
            <h1 className={styles.success}>Sucess</h1>
            <button className="btn btn-success">Save data</button>
        </div> 
       /* <div style={divStyle}>
       <p style={pStyle}><h2>Welcome to ThinkQuotient Software Private Limited</h2></p>
     </div> */
       
    )
}

export default InlineCssExample



