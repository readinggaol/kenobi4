import { useState, useEffect } from "react"

const CollectionViewer = (props) => {
    
  
    return (
        <div className="collectionviewer">
            <p>{props.label}</p>
            <select className="form-control">
                {props.cards.map((card) => (<option key={card.card_id}>{card.name}</option>) )}
            </select>
            <label>( {props.cards.length} unique )</label>
            <img></img>
        </div>
    )
}

export default CollectionViewer
