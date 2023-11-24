import "./TextCard.scss";

function TextCard(props) {
    return (
        <div className="text-card">
            <h1 className="text-card-title">{props.title}</h1>
            <hr className="text-card-hr" />
            <p className="text-card-p">{props.text}</p> 
        </div>
    );
}

export default TextCard;