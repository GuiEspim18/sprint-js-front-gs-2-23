import "./Success.scss";

function Success(props) {
    return (
        <div className="overlay">
            <div className="alert success">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Success;
