import React, {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Badge } from "reactstrap";
const initialState ={
    counter:0
}
const reducer = (state, action)=>{
    switch (action.type) {
        case "increment":
            return {...state, counter: state.counter + action.payload}
        case "decrement":  
           return {...state, counter: state.counter - action.payload}
        case "reset":
            
           return initialState
        
    
        default:
            return state;
    }
}
function MutiReducer() {
    const [state1, dispatch1] = useReducer(reducer, initialState)
    const [state2, dispatch2] = useReducer(reducer, initialState)

  return (
    <div style={{border:"2px solid black" , margin:"20px"}}>
        <h3>Counter App Using Multi Reducers</h3>
        <ButtonGroup>
            <Button color='primary' outline>
                Counter1 <Badge color='secondary'>{state1.counter}</Badge>
            </Button>
            <Button color='primary' outline>
                Counter2 <Badge color='secondary'>{state2.counter}</Badge>
            </Button>
        </ButtonGroup>
        <p></p>
<ButtonGroup>
  <Button color="dark" onClick={()=>dispatch1({type:'increment', payload:1})}>Increment</Button>
  <Button color="dark" onClick={()=>dispatch1({type:'decrement', payload:1})}>Decrement</Button>
  <Button color="danger" onClick={()=>dispatch1({type:'reset'})}>Reset</Button>
</ButtonGroup>

<p></p>
<ButtonGroup>
  <Button color="dark" onClick={()=>dispatch2({type:'increment', payload:1})}>Increment</Button>
  <Button color="dark" onClick={()=>dispatch2({type:'decrement', payload:1})}>Decrement</Button>
  <Button color="danger" onClick={()=>dispatch2({type:'reset'})}>Reset</Button>
</ButtonGroup>


<p></p>

    </div>
  )
}

export default MutiReducer;