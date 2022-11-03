import React,{ useRef, useState }  from 'react'
import CompA from '../UseRef/compA';
function Ref() {
    const inputRef = useRef(true);
    const [show, setShow] = useState(true)
  return (
    <div>
        <p>Focus On input Filed Using Use Ref</p>
        <input ref={inputRef} type="text" />
        <input type="text" />
        <input type="text" />
        <button onClick={()=>{
            inputRef.current.focus();
        }}>focus</button>
        <p></p>
        <button onClick={()=>setShow(!show)}>Toggle Component</button>
        <h1>Unmount Component</h1>
        {show && <CompA/>}
    </div>
  )
}

export default Ref