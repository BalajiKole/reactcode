import React from 'react'

function IndexAsKeyExample() {
   const names=['Jay','Ansh','Sara','Jay']
   // const namelist = names.map(name =><h1 key={name}>{name}</h1>)
    const namelist = names.map((name,index) =><h1 key={index}>{index} {name}</h1>)

    return (
        <div>
            {namelist}
        </div>
    )
}

export default IndexAsKeyExample
