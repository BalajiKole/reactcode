//CSS stylesheets exmaple use DottedBox.css file
import React from 'react'
import './DottedBox.css';
const StylingExample = (props) => {
  let className1=props.Primary?'Primary':''
  return(
  
    <div className="DottedBox">
      <p className="DottedBox_content">Apply CSS styling in React application</p>
      <h1 className="Primary">Welcome to TQPP</h1>
      <h1 className={className1} >Hello React</h1>
      <h1 className={`${className1} font-xl`} >Welcome Angular</h1> {/* convert class attribute into template literal using `${}` */}
    </div>
  )};

export default StylingExample
