import Button from "./Button"



const Toolbar = (props) => {

    const getProxyCards = () => {
        let proxies = []
        props.cards.map((card) => card.is_proxy === "true" ? proxies.push(card) : null)
        props.setCurrentCards(proxies)
        props.setLabel("Proxies")
        console.log(props.cards.length)
    }

    const getAuthenticCards = () => {
        let proxies = []
        props.cards.map((card) => card.is_proxy === "false" ? proxies.push(card) : null)
        props.setCurrentCards(proxies)
        props.setLabel("Authentics")
    }

    const getAllCards = () => {
        props.setCurrentCards(props.cards)
        props.setLabel("Complete Collection")
    }

    return (
        <div className="toolbar">
            <Button title="Complete" onClick={getAllCards} />
            <Button title="Proxy" onClick={getProxyCards}/>
            <Button title="Authentic" onClick={getAuthenticCards} />
        </div>
    )
}

export default Toolbar
