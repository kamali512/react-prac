import React,{useState, useMemo} from 'react'
import CompA from './compA';
function Memo() {
    const [countA, setCountA] = useState(0);
    const increment = () =>{
        setCountA(countA+1);
    };
  const memoCompomemtA = useMemo(() => {
   return <CompA/>
 },[countA])
  return (
    <div>
        Memo js count A:{countA}
        <p>
            <button onClick={increment}>Increment</button>
        </p>
       {memoCompomemtA}
    </div>
  )
}

export default Memo