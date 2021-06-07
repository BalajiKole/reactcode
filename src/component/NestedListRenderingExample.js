import React from 'react'
//nested lists 
const NestedListRenderingExample = () => {
    const user = [
    {name: 'chris',pets: [{ name: 'bella', type: 'dog' },{ name: 'cocoa', type: 'dog' }]},
    {name: 'nick',pets: [{ name: 'hilo', type: 'cat' },{ name: 'polly', type: 'cat' }]}
  ];
    return (
        <div>
        {user.map((person, index) => (
          <div key={index}>
            <h1>{person.name}'s Pets</h1>
  
            {/* {/_ loop over the pets _/} */}
            <div>
              {person.pets.map((pet, i) => (
                <p key={i}>
                  {pet.type} named {pet.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
}

export default NestedListRenderingExample
