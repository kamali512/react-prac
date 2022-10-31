import React, {useState, useEffect} from 'react';
import Card from './card';
import {ThemeProvider} from 'styled-components';
import axios from 'axios';
const theme = {
  primary:'#4CAF50',
  mango:'yellow'
}
function CardData() {
  const [card, setCard] = useState([])
  const [id, setId] = useState(1)
  useEffect(() => {
   axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
   .then(res=>{
    console.log(res.data)
    setCard(res.data)
   })

  }, [id])
  const changeNameHandler=(event,id)=>{
    const card_copy = {...card}
    card_copy.name = event.target.value
    setCard(card_copy)
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
    <Card 
      name={card.name}
      phone ={card.phone}
      key={card.id}
      changeName={(event) => changeNameHandler(event,card.id)}/>
    </div>
    </ThemeProvider>
  );
}

export default CardData;