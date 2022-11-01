import React,{useReducer} from 'react';
import ComponenetA from './Componenet';
export const CounterContext = React.createContext()
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
function URUE(){
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContext.Provider value= {{counter:state.counter, dispatch}}>
    <div className="App">
      App JS Counter {state.counter}
      <ComponenetA />
    </div>
    </CounterContext.Provider>
  );
}
  


export default URUE;