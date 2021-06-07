import React from 'react'

const Number = () => {
    const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => <h1>{number * 2}</h1>);
    return (
        <div>
           {doubled} 
        </div>
    )
}

export default Number
