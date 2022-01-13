import { useState, useEffect } from "react"

const CollectionViewer = (props) => {
    const [cards, setCards] = useState([])
    const [label, setLabel] = useState()
    const [viewerImg, setViewerImg] = useState()

    //Query the locally run server to get the json list of cards
    useEffect(() => {

        //Fetch cards with an optional argument that will change the cards 
        //that appear in the dropdown
        const fetchCards = async (mode="null") => {
        const res = await fetch("http://localhost:5000/cards")
        const data = await res.json()
        
        if(mode === "proxy"){
            let proxies = [] 
            data[0].map((card) => card.is_proxy === "true" ? proxies.push(card) : console.log("nope"))
            setCards(proxies)
            setLabel("Proxies")
        }else if(mode === "authentic"){
            let authentics = []
            data[0].map((card) => card.is_proxy === "false" ? authentics.push(card) : console.log("nope"))
            setCards(authentics)
            setLabel("Authentics")
        }else{
            setCards(data[0])
            setLabel("Complete Collection")
        }
      }
      //call the default method when we load the page
      fetchCards()
    }, [])
  
    return (
        <div className="collectionviewer">
            <p>{label}</p>
            <select>
                {cards.map((card) => (<option key={card.card_id}>{card.name}</option>) )}
            </select>
            <img src={viewerImg}></img>
        </div>
    )
}

export default CollectionViewer
