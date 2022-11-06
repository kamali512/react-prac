import React from 'react';
import './App.css';
// import ComA from './contestComponent/componetA'
// import CardData from './component/CardData';
// import Counter from "./usereducer/Counter"
// import MutiReducer from './usereducer/mutiReducer'
// import URUE from './usereducer/uRUEfeect';
// import URUEf from './usereducer/URUE';
// import Memo from './useMemo/Memo';
// import Ref from './UseRef/Ref';
// export const NameContext = React.createContext()
// export const ColorContext = React.createContext()
import Home from './RouterComponent/Home';
import About from './RouterComponent/About';
import Contact from './RouterComponent/Contact';
import Navbar from './RouterComponent/Navbar';
import Post from './RouterComponent/Posts';
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
function App(){
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <Routes >
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/:post_id' element={<Post/>}/>
     </Routes>
    {/* <CardData />
      <NameContext.Provider value={'Smith'}>
        <ColorContext.Provider value={'red'}>  
      <ComA/>
      </ColorContext.Provider>
      </NameContext.Provider>
      <Counter />
      <MutiReducer />
      <URUE/>
      <URUEf/>
      <Memo/>
      <Ref/> */}
    </div>
    </Router>
  );
}
  


export default App;