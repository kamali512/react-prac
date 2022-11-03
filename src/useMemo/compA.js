import React,{useEffect} from 'react'
let renderCount = 1
function CompA(props) {
    useEffect(() => {
      renderCount++
    })
    
  return (
    <div>
       ComponentA : render {renderCount} times || Counter: {props.count}
    </div>
  )
}

export default CompA;