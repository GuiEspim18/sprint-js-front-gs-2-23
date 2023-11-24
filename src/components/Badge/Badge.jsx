import "./Badge.scss";

function Badge(props) {
    const selected = props.selected
    const handleClick = props.onClick;

    return (
        <div className={`badge ${selected ? "selected" : ""}`} onClick={handleClick}>
        </div>
    );
}

export default Badge;