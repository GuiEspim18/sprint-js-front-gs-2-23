import FlipCard from "../cards/FlipCard/FlipCard";
import "./Benefits.scss";
import { path } from "../../utils/api/path";
import { useEffect, useState } from "react";

function Benefits() {

    const [ content, setContent ] = useState([]);

    const populate = async () => {
        try {
            const request = await fetch(`${path}/benefits`, {
                method: "GET"
            });
            const response = request.json();
            response.then((result) => {
                setContent(result);
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    useEffect(() => {
        populate();
    }, []);

    return (
        <div className="benefits">
            <h1>Vantagens</h1>
            <div className="cards-row">
                { content.map((element, key) => <FlipCard key={key} icon={element.icon} title={element.title} text={element.text} />) }
            </div>
        </div>
    );
}

export default Benefits;
