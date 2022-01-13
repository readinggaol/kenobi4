import Header from './components/Header'
import Button from './components/Button'
import Toolbar from './components/Toolbar';
import { useState, useEffect } from 'react';
import CollectionViewer from './components/CollectionViewer';

// This is the central component from which all other components are loaded
function App() {
  const [cards, setCards] = useState([])
  const [currentCards, setCurrentCards] = useState([])
  const [label, setLabel] = useState()
  const [viewerImg, setViewerImg] = useState()

  //Query the locally run server to get the json list of cards
  useEffect(() => {
      const fetchCards = async () => {
      const res = await fetch("http://localhost:5000/cards")
      const data = await res.json()
      setCards(data[0])
    }
    //call the default method when we load the page
    fetchCards()
  }, [])
 
  return (
    <div className="container">
      <Header />
      <Toolbar setCurrentCards={setCurrentCards} setLabel={setLabel} cards={cards}/>
      <CollectionViewer cards={currentCards} label={label}/>
    </div>
  );
}

export default App;
