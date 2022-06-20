import './DataDisplayField.scss';

function DataDisplayField({ label, result }) {

    return (
        <div className="data-display-field">
            <div className="data-display-field__label">{label.toUpperCase()}</div>
            <div className="data-display-field__result">{result}</div>
        </div>
    )
}

export default DataDisplayField