import obi from '../uberobi.png';

const Header = (props) => {
    return (
        <div className="header">
            <div>
            <img className="logo" src={obi} alt="uber-obi logo"></img>
            </div>
            
            <h1>{props.title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: "Kenobi4: Collection Manager",
}

export default Header
