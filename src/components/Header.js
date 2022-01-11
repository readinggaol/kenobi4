import obi from "C:/Users/dougp/Documents/GitHub/kenobi4/kenobi4/src/images/uberobi.png";

const Header = (props) => {
    return (
        <div className="header">
            <img src={obi} alt="not found"></img>
            <h1>{props.title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: "Kenobi4: Collection Manager",
}

export default Header
