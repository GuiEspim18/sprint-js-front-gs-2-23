import "./Error.scss";

function Error(props) {
    return (
        <div className="overlay">
            <div className="alert error">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Error;