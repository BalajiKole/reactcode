import React from 'react'

function HeroName({ heroName }) {
    if (heroName === 'Jay') {
        throw new Error(' Not a hero!')
      }
      return <h1>{heroName}</h1>
}

export default HeroName
