import "./FormCard.scss";

function FormCard ({ children }) {
    return (
        <div className="form-card">
            {children}
        </div>
    );
}

export default FormCard;