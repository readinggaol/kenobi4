import Header from './components/Header'
import Button from './components/Button'
import Toolbar from './components/Toolbar';
import { useEffect } from 'react';

// This is the central component from which all other components are loaded
function App() {

  //Query the locally run server to get the json list of cards
  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("http://localhost:5000/cards")
      const data = await res.json()

      console.log(data)
    }

    fetchCards()
  })

  return (
    <div className="container">
      <Header />
      <Toolbar />
    </div>
  );
}

export default App;
