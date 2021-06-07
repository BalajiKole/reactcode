import React from 'react'

function NameListExample() {
    const names=['jay','ansh','sara']
    const namelist=names.map(name=><h2>{name}</h2>)
    return (

        <div>
           {
              namelist
           } 
        </div>
        /*  <div>
           {
               names.map(name=><h2>{name}</h2>)
           } 
        </div> */
    )
}

export default NameListExample


/* 1. return (
    <div>
       <h2>{names[0]}</h2> 
       <h2>{names[1]}</h2> 
       <h2>{names[2]}</h2> 
    </div>
) 
{}- remember map() is js code which need to evalulated and {} is do that in jsx
*/