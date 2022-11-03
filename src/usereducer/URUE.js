import React,{ useEffect, useReducer } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem, Badge, NavItem } from 'reactstrap';
const initialState = {
    loading: true,
    error:"",
    todos:[],
};
const reducer = (state, action)=>{
    switch (action.type) {
        case 'SET_DATA':
            return{
                loading: false,
                error:"",
                todos:action.payload,
            }
        case 'SET_ERROR':
            return{
                loading: false,
                error:"There Are Some Errors",
                todos:[],
            }
           
    
        default:
            break;
    }
}
function URUEf() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res=>{
        console.log(res.data);
        dispatch({type:"SET_DATA", payload:res.data})
      })
      .catch(err =>{
        dispatch({type:"SET_ERROR"})
      })
    }, [])
  const listmarkup =  (
  <ListGroup>
    {state.todos.map(todo=><ListGroupItem key={todo.id}>{todo.title} {NavItem.completed?(<Badge color="success">Completed</Badge>):(<Badge color='danger'>Incomplete</Badge>)}</ListGroupItem>)}
  </ListGroup>
    )
  return (
    <div>
        {state.loading?'Loading':state.error? state.error : listmarkup}
        {}
    </div>
  )
}

export default URUEf