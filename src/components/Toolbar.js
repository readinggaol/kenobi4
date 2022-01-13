import Button from "./Button"



const Toolbar = (props) => {

    const getProxyCards = () => {
        let proxies = []
        props.cards.map((card) => card.is_proxy === "true" ? proxies.push(card) : null)
        props.setCurrentCards(proxies)
        console.log("test")
    }

    return (
        <div className="toolbar">
            <Button title="Complete" />
            <Button title="Proxy" onClick={getProxyCards()}/>
            <Button title="Authentic" />
        </div>
    )
}

export default Toolbar
