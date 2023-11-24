import { useState } from "react";
import FormCard from "../../components/cards/FormCard/FormCard";
import Header from "../../components/Header/Header";
import SubmitButton from "../../components/buttons/SubmitButton/SubmitButton";
import PasswordInput from "../../components/inputs/PasswordInput/PasswordInput";
import TextInput from "../../components/inputs/TextInput/TextInput";
import "./Login.scss";
import { path } from "../../utils/api/path";
import { WebToken } from "../../utils/token/token";
import Success from "../../components/alerts/Success/Success";
import Error from "../../components/alerts/Error/Error";
import { useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const JWT = new WebToken();
    const [found, setFound] = useState({});
    const [showSucess, setShowSucess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email.length === 0 || form.email.length === 0) {
            return showErrorAlert("Preencha todos os campos!");
        }
        login().then(async (result) => {
            const users = result;
            const foundUser = users.find((element) => {
                return element.email === form.email;
            });
            if (!foundUser) {
                return showErrorAlert("Usuário não cadastrado!");
            }
            if (form.password !== foundUser.password) {
                return showErrorAlert("Senha incorreta!");
            }
            delete foundUser.password;
            const token = await JWT.jwtEncode(foundUser);
            localStorage.setItem("token", token);
            setFound(foundUser);
            showSuccessAlert();
        })
    }

    const handleChange = (name, event) => {
        form[name] = event.target.value;
        setForm(form)
    }

    const login = async () => {
        const request = await fetch(`${path}/users`, {
            method: "GET"
        });
        return request.json();
    }

    const showErrorAlert = (message) => {
        setErrorMessage(message);
        setShowError(true);
        setTimeout(() => {
            setShowError(false)
        }, 2000);
    }
    
    const showSuccessAlert = () => {
        setShowSucess(true);
        setTimeout(() => {
            setShowSucess(false)
            navigate("/home")
        }, 1000)
    }

    return (
        <>
            <Header />
            {showSucess && <Success text={`Olá, ${found.username}!`} />}
            {showError && <Error text={errorMessage} />}
            <FormCard>
                <div className="form-card-content">
                    <h3>Login</h3>
                    <hr />
                    <form>
                        <TextInput placeholder="Email" type="email" onChange={(e) => handleChange("email", e)} />
                        <PasswordInput placeholder="Senha" onChange={(e) => handleChange("password", e)} />
                        <div className="submit-button-holder">
                            <SubmitButton text="Entrar" onClick={handleSubmit} />
                        </div>
                    </form>
                </div>
            </FormCard>
        </>
    );
}

export default Login;