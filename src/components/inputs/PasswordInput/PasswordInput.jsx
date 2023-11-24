import { useState } from "react";

function PasswordInput (props) {
    const [visible, setVisible] = useState(false);
    const placeholder = props.placeholder;
    const handleChange = props.onChange;

    const handleChangeVisible = (e) => {
        e.preventDefault();
        setVisible(!visible)
    }

    return (
        <div className="input-holder">
            <input type={visible ? "text" : "password"} placeholder={placeholder} onChange={handleChange} />
            <button onClick={handleChangeVisible}>
                <span className="material-symbols-rounded">
                    {visible ? "visibility" : "visibility_off"}
                </span>
            </button>
        </div>
    );
}

export default PasswordInput;