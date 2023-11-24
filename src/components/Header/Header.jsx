import "./Header.scss";
import Group from "../Group/Group";
import SubmitButton from "../buttons/SubmitButton/SubmitButton";
import { useNavigate } from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/")
    }

    return (
        <header>
            <Group />
            <div>
                <p>Global Solution 2023 - Engenharia de Software</p>
                {props.user && <div className="user-info">
                    <p className="user-name">Olá, {props.user}!</p>
                    <SubmitButton onClick={logout} text="Logout" />
                </div>}
            </div>
        </header>
    );
}

export default Header;