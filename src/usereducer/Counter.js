import React, {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Badge } from "reactstrap";
const initialState ={
    counter1:0,
    counter2:10
}
const reducer = (state, action)=>{
    switch (action.type) {
        case "increment":
            return {...state, counter1: state.counter1 + action.payload}
        case "decrement":  
           return {...state, counter1: state.counter1 - action.payload}
        case "increment2":
            return {...state, counter2: state.counter2 + 1}
        case "decrement2":  
           return {...state, counter2: state.counter2 - 1}
        case "reset":
            
           return initialState
        
    
        default:
            return state;
    }
}
function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <ButtonGroup>
            <Button color='primary' outline>
                Counter1 <Badge color='secondary'>{count.counter1}</Badge>
            </Button>
            <Button color='primary' outline>
                Counter2 <Badge color='secondary'>{count.counter2}</Badge>
            </Button>
        </ButtonGroup>
        <p></p>
<ButtonGroup>
  <Button color="dark" onClick={()=>dispatch({type:'increment', payload:1})}>Increment</Button>
  <Button color="dark" onClick={()=>dispatch({type:'decrement', payload:1})}>Decrement</Button>
</ButtonGroup>

<p></p>
<ButtonGroup>
  <Button color="dark" onClick={()=>dispatch({type:'increment', payload:5})}>Increment5</Button>
  <Button color="dark" onClick={()=>dispatch({type:'decrement', payload:5})}>Decrement5</Button>
</ButtonGroup>

<p></p>
<ButtonGroup>
  <Button color="dark" onClick={()=>dispatch({type:'increment2'})}>Increment</Button>
  <Button color="dark" onClick={()=>dispatch({type:'decrement2'})}>Decrement</Button>
</ButtonGroup>
<p></p>
<Button color="danger" onClick={()=>dispatch({type:'reset'})}>Reset</Button>
    </div>
  )
}

export default Counter