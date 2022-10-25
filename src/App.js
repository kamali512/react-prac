import React, {useState} from 'react';
import './App.css';
import Card from './component/card';
import {faker} from "@faker-js/faker"

function App() {
const [cards, setCards] = useState([
  {
    id:1,
    name: "Rupert",
    title:"WEB DEVELOPER AND ANDRIOD DEVELOPER",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJjsxoqkMpkBlcBA_Ixiy_k95U2FlcsHEaQ&usqp=CAU"
    },
    {
      id:2,
    name: "Lester",
    title:"FRONTEND DEVELOPER AND DESIHGNER",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tEg2sNzp5PK6_YCL_Aj4kIm9SeMC1D8GfA&usqp=CAU"
    },
    {
      id:5,
    name: "Florencio",
    title:"ADMINISTRATOR AND SKILLED",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tEg2sNzp5PK6_YCL_Aj4kIm9SeMC1D8GfA&usqp=CAU"
    },
    {
      id:3,
    name: "Margret",
    title:"HUMAN RESOUSES MANAGER",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tEg2sNzp5PK6_YCL_Aj4kIm9SeMC1D8GfA&usqp=CAU"
    },
    {
   id:4,
    name: "Rachelle",
    title:"Co founder of an Organization",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tEg2sNzp5PK6_YCL_Aj4kIm9SeMC1D8GfA&usqp=CAU"
    }
])
  const [showCard, setShowCard] = useState(true)
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) =>{
    const card_copy= [...cards]
    card_copy.splice(cardIndex, 1)
    setCards(card_copy);
  }
  const changeNameHandler=(event,id)=>{
    const cardIndex = cards.findIndex(card=>card.id == id)
    const cards_copy = [...cards]
    cards_copy[cardIndex].name = event.target.value
    setCards(cards_copy)
  }
// const buttonStyle={
//   backgroundColor:null
// }
const classes = ['button']
if (cards.length<3) classes.push('pink')
if (cards.length<2) classes.push('red text')
  const cardMarkup = showCard  && (
    cards.map((card,index)=><Card 
      avatar={card.avatar}
      name={card.name}
      title ={card.title}
      key={card.id}
      onDelete= {()=>deleteCardHandler(index)} 
      changeName={(event) => changeNameHandler(event,card.id)}/>)
  )
  
  return (
    <div className="App">
      <button className={classes.join(' ')}  onClick={toggleShowCard}>Toggle Show/Hide</button>
     {cardMarkup}
       
    </div>
  );
}

export default App;
{}