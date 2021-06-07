import React from 'react'
import Person from './Person';

function NameListExample1() {
    const persons = [{ id: 1, name: 'Ansh', age: 22, skill: 'React' },
    { id: 2, name: 'Jay', age: 25, skill: 'Java' },
    { id: 3, name: 'Sara', age: 23, skill: 'Angular' }]
    /* const personlist = persons.map(person => (
       <h2>
           I am {person.name}. I am {person.age} years old. I know {person.skill}
       </h2>)) */
// it is recommended to use more in list rendering or we can use above pattern
     const personlist = persons.map(person => (
        <Person key={person.id} person={person} />
    )) 

    return (
        <div>
            {personlist}
        </div>
    )
}

export default NameListExample1
//key props not accessible in chlid components