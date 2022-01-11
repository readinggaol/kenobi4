const Button = (props) => {
    return <button className="btn-primary">{props.title}</button>

}

Button.defaultProps = {
    title: "Click Me",
}

export default Button
