import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Badge } from "reactstrap";
import { CounterContext } from './uRUEfeect';
const ComponenetA = () => {
    const countercontext = useContext(CounterContext)
    console.log(countercontext);
    const { counter, dispatch } = countercontext;
  return (
    <div>
         <ButtonGroup>
            <Button color='primary' outline>
                Counter1 <Badge color='secondary'>{counter}</Badge>
            </Button>
        </ButtonGroup>
        <p></p>
<ButtonGroup>
  <Button color="dark" onClick={()=>dispatch({type:'increment', payload:1})}>Increment</Button>
  <Button color="dark" onClick={()=>dispatch({type:'decrement', payload:1})}>Decrement</Button>
  <Button color="danger" onClick={()=>dispatch({type:'reset'})}>Reset</Button>
</ButtonGroup>

    </div>
  )
}

export default ComponenetA;