import React from 'react'
import { faker } from '@faker-js/faker'
import ColorFul from './HOF/ColorFul'
function About() {
  return (
    <div className="container">
        <div className="center">About</div>
        <p>{`${faker.lorem.paragraph()}`}</p>

    </div>
   
  )
}

export default ColorFul(About)