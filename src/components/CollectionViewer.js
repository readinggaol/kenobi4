import { useState, useEffect } from "react"

const CollectionViewer = (props) => {
    
    let scryURL = "https://api.scryfall.com/cards/named?exact="
    let scryImageURL = "https://api.scryfall.com/cards/"

    const [currentCard, setCurrentCard] = useState()

    //Get the name of the current card, parse it, then fetch the image and update state
    const updateCard = async (e) => {
        let cardURL = scryURL + e.currentTarget.value.replaceAll(" ", "+")
        let res = await fetch(cardURL)
        let data = await res.json()
        let imageURL = scryImageURL + data.id + "?format=image"
        setCurrentCard(imageURL)
    }
  
    return (
        <div className="collectionviewer">
            <p>{props.label}</p>
            <select className="form-control" onChange={updateCard}>
                {props.cards.map((card) => (<option key={card.card_id}>{card.name}</option>) )}
            </select>
            <p>( {props.cards.length} unique )</p>
            <img src={currentCard}></img>
        </div>
    )
}

export default CollectionViewer
