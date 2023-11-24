import { useEffect, useState } from "react";
import { WebToken } from "../../utils/token/token";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.scss";
import Carousel from "../../components/Carousel/Carousel";
import careband from "../../assets/careband.svg";
import ami from "../../assets/ami.svg";
import TextCard from "../../components/cards/TextCard/TextCard";
import { path } from "../../utils/api/path";
import heartLogo from "../../assets/heart-logo.svg";
import Benefits from "../../components/Benefits/Benefits";

function Home() {
    const JWT = new WebToken();
    const navigate = useNavigate();
    const [found, setFound] = useState({});
    const images = [careband, ami];
    const [content, setContent] = useState([])

    const validate = async () => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/");
        } else {
            const decode = await JWT.jwtDecode(token);
            setFound(decode);
        }
    }

    const populate = async () => {
        try {
            const request = await fetch(`${path}/text-cards`, {
                method: "GET"
            });
            const response = request.json();
            response.then(result => {
                setContent(result);
                console.log(result)
            })
        } catch (err) {
            throw new Error(err);
        }
    }

    useEffect(() => {
        validate();
        populate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header user={found.username} />
            <main className="home-main">
                <section className="container">
                    <div className="row row-1">
                        <div className="column-1">
                            <div className="logo-row">
                                <img src={heartLogo} alt="logo" className="logo" />
                                <h1><span className="span1">Notre</span><span className="span2">Care</span></h1>
                            </div>
                            <Carousel images={images} />
                        </div>
                        <div className="column-2">
                            {content.map((element, key) => <TextCard key={key} title={element.title} text={element.text} />)}
                        </div>
                    </div>
                    <Benefits />
                </section>
            </main>
        </>
    );
}

export default Home;