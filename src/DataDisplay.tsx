import './DataDisplay.scss';

//@ts-ignore
import DataDisplayField from "./DataDisplayField.tsx"

function DataDisplay({ ipResponse }) {
    return (
        <div id='data-display' className="data-display">
            <DataDisplayField label={'IP Address'} result={ipResponse?.ip} />
            <div className="data-display--divider"></div>
            <DataDisplayField label={'Location'} result={ipResponse?.location.city} />
            <div className="data-display--divider"></div>
            <DataDisplayField label={'Timezone'} result={ipResponse?.location.timezone} />
            <div className="data-display--divider"></div>
            <DataDisplayField label={'Isp'} result={ipResponse?.isp} />
        </div>
    )
}

export default DataDisplay