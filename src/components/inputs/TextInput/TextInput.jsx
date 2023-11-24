function TextInput (props) {
    const placeholder = props.placeholder;
    const handleChange = props.onChange;
    const type = props.type;

    return (
        <input className="input" type={type ? type : "text"} placeholder={placeholder} onChange={handleChange} />
    );
}

export default TextInput;