import React, {useContext} from 'react'
import ComC from './componetC'
import { ColorContext, NameContext } from '../App'
const ComponetB = () => {
  const name = useContext(NameContext)
  const color = useContext(ColorContext)
  return (
    <div>
        <div>componetB</div>
        <div>name: {name} color: {color} </div>
        <ComC/>
    </div>
  )
}

export default ComponetB;