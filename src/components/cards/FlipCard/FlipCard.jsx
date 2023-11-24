import { useState } from "react";
import "./FlipCard.scss";

function FlipCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flip-card-container" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-card-front">
                    <div className="flip-card-content">
                        <span className="material-symbols-rounded">
                            {props.icon}
                        </span>
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="flip-card-content">
                        <h3>{props.title}</h3>
                        <hr />
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;