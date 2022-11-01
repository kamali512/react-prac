import React from 'react';
import './App.css';
import ComA from './contestComponent/componetA'
import CardData from './component/CardData';
import Counter from "./usereducer/Counter"
import MutiReducer from './usereducer/mutiReducer'
import URUE from './usereducer/uRUEfeect';
export const NameContext = React.createContext()
export const ColorContext = React.createContext()

function App(){
  return (
    <div className="App">
      
    <CardData />
      <NameContext.Provider value={'Smith'}>
        <ColorContext.Provider value={'red'}>  
      <ComA/>
      </ColorContext.Provider>
      </NameContext.Provider>
      <Counter />
      <MutiReducer />
      <URUE/>
    </div>
  );
}
  


export default App;