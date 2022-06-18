import './DataDisplay.scss';

//@ts-ignore
import DataDisplayField from "./DataDisplayField.tsx"

function DataDisplay() {
    return (
        <div className="data-display">
            <DataDisplayField label={'IP Address'} result={'192.192.192.195'} />
            <div className="data-display--divider"></div>
            <DataDisplayField label={'Location'} result={'Brooklyn, NY 10001'} />
            <div className="data-display--divider"></div>
            <DataDisplayField label={'Timezone'} result={'UTC -09:00'} />
            <div className="data-display--divider"></div>
            <DataDisplayField label={'Isp'} result={'SpaceX Starlink'} />
        </div>
    )
}

export default DataDisplay