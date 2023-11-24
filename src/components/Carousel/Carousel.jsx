import { useState } from "react";
import Badge from "../Badge/Badge";
import "./Carousel.scss";

function Carousel(props) {
    const images = props.images;
    const [selected, setSelected] = useState(0);
    
    const handleLast = () => {
        if (selected === 0) {
            setSelected(images.length - 1);
        } else {
            setSelected(selected - 1)
        }
    }

    const handleNext = () => {
        if (selected === images.length -1) {
            setSelected(0)
        } else {
            setSelected(selected + 1);
        }
    }

    return (
        <div className="carousel">
            <img src={images[selected]} alt="" />
            <div className="controls">
                <button className="last" onClick={handleLast}>
                    <span className="material-symbols-rounded">
                        arrow_back_ios_new
                    </span>
                </button>
                <button className="next" onClick={handleNext}>
                    <span className="material-symbols-rounded">
                        arrow_forward_ios
                    </span>
                </button>
                <div className="badges">
                    { images.map((element, key) => <Badge key={key} selected={key === selected} />) }
                </div>
            </div>
        </div>
    );
}

export default Carousel;