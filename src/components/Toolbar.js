import Button from "./Button"



const Toolbar = (props) => {

    const getProxyCards = () => {
        let proxies = []
        props.cards.map((card) => card.is_proxy === "true" ? proxies.push(card) : null)
        props.setCurrentCards(proxies)
        props.setLabel("Proxies")
    }

    const getAuthenticCards = () => {
        let auths = []
        props.cards.map((card) => card.is_proxy === "false" ? auths.push(card) : null)
        props.setCurrentCards(auths)
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
