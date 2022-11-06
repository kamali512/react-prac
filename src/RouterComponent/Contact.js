import React from 'react'
import { faker } from '@faker-js/faker'
function Contact() {
  return (
    <div className="container">
        <div className="center">Contact</div>
        <p>{`${faker.lorem.paragraph()}`}</p>

    </div>
   
  )
}

export default Contact