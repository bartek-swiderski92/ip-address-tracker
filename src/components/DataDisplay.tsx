import '../styles/DataDisplay.scss';
import { DataDisplayField } from "./DataDisplayField"

interface Props {
    ipResponse: {
        ip: string,
        location: {
            city: string,
            timezone: string
        },
        isp: string,
    };
}

export const DataDisplay: React.FC<Props> = ({ ipResponse }) => {
    return (
        <div id='data-display' className="data-display">
            <DataDisplayField label={'IP Address'} result={ipResponse?.ip} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Location'} result={ipResponse?.location.city} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Timezone'} result={'UTC ' + ipResponse?.location.timezone} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Isp'} result={ipResponse?.isp} />
        </div>
    )
}

