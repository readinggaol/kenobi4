import { useState, useEffect } from "react"

const CollectionViewer = (props) => {
    
  
    return (
        <div className="collectionviewer">
            {/* <p>{props.label}</p> */}
            <select>
                {props.cards.map((card) => (<option key={card.card_id}>{card.name}</option>) )}
            </select>
            <img></img>
        </div>
    )
}

export default CollectionViewer
