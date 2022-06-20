import './DataDisplayField.scss';

interface Props {
    label: string;
    result: string;
}

export const DataDisplayField: React.FC<Props> = ({label, result}) => {

    return (
        <div className="data-display-field">
            <div className="data-display-field__label">{label.toUpperCase()}</div>
            <div className="data-display-field__result">{result}</div>
        </div>
    )
}

