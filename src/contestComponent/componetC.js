import React from 'react'
import { NameContext } from '../App';
import { ColorContext } from '../App';
const componetC = () => {
  return (
    <div>
        <div>componetC</div>
        <NameContext.Consumer>
          {name=>{
            return(
              <ColorContext.Consumer>
                  {color => (
                    <div>name: {name}, color {color}</div>
                  )
                     
                  }
              </ColorContext.Consumer>
            )
          }}
        </NameContext.Consumer>
    </div>
  )
}

export default componetC;