import React from 'react'

function TableColumns() {
    const items=[]
    return (

       /*  <div>   // check browser console and element 
            <td>Name</td>  
            <td>Jay</td>
        </div>  */
       <React.Fragment> 
           <td>Name</td>
            <td>Jay</td>
        </React.Fragment> 

    )
}

export default TableColumns
//<React.Fragment> or use <>
//<> there is one limitation - you cant pass key attribute 
//You can use <></> the same way you’d use any other element except that it doesn’t support keys or attributes.
{/* this is possible
    React.Fragment only pass key attribute
    <React.Fragment> 
{
    items.map(item=>(
        <React.Fragment key={item.id}>
        <h1>Title</h1>
        <p>{item.title}</p>

        </React.Fragment>
    ))
}
<td>Name</td>
<td>Jay</td>
</React.Fragment> */}