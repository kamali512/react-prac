import React, {useState, useEffect, useRef} from 'react'

function CompA() {
    const [count, setCount] = useState(0);
    const componentRef = useRef(true)
    useEffect(() => {

        return () => {
            componentRef.current = false
        }
    }, [])
    const fakefetch = () => {
        setTimeout(() => {
            if(componentRef.current)
            setCount(count+1)
        }, 2000);
    }
  return (
    <div>
            <h1>Component counter: {count}</h1>
            <button onClick={fakefetch}>fake fetch</button>
        </div>
  )
}

export default CompA