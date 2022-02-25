import './App.css';
import Api from './Api';
import GitHubApi from './GitHubApi';
import { useState } from 'react';
const App = () => {
  const [cards, setCards] = useState([])
  let addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div>
      <Api></Api>
      <GitHubApi></GitHubApi>
    </div>
  )
}
export default App;
