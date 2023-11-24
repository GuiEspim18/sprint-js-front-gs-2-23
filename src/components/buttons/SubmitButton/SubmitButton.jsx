import "./SubmitButton.scss";

function SubmitButton (props) {
    const handleClick = props.onClick;

    return (
        <button className="button submit" onClick={handleClick}>
            {props.text}
        </button>
    );
}

export default SubmitButton;