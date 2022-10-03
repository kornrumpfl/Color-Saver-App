import MainCard from "./components/mainCard/MainCard";
import "./App.css";
import colorObjects from "./components/ColorCard/colorObjects";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import {nanoid} from "nanoid";
import {saveToLocal,loadFromLocal} from "../src/components/localStorage"

function App() {

  const[cards,setCards]=useState(loadFromLocal("cards") ?? colorObjects);
  /*loadFromLocal() ?? */

useEffect(()=>{
  saveToLocal("cards",cards);
},[cards])
  
  function addCard(color){
    setCards([...cards,{id:nanoid(),colorCode:color}])
  }
 
  function onCopy(cardId){
      navigator.clipboard.writeText(cards.map((card)=>{
      return(card.id===cardId?card.colorCode:"")
    }))};

  function deleteCard(cardId){
    setCards(cards.filter(({id}) => cardId !== id));
      }

  return (
    <div>
    <h1>Color Saver App</h1>
    <div className="App">
      <MainCard onAdd={addCard} />
      <Cards 
        cards={cards} 
        onDelete={deleteCard}
        onCopy={onCopy}
      /> 
    </div>
    </div>
  )
}

export default App;
