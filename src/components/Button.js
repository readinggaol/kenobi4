const Button = (props) => {
    return <button onClick={props.onClick} className="btn btn-primary">{props.title}</button>
}

Button.defaultProps = {
    title: "Click Me",
}

export default Button
