import '../styles/DataDisplay.scss';
import { DataDisplayField } from "./DataDisplayField"

interface Props {
    ipResponse: {
        ip: string,
        country: string,
        region: string,
        city: string,
        timezone: string,
        isp: string,
    };
}

export const DataDisplay: React.FC<Props> = ({ ipResponse }) => {

    // Checks if the values are defined, remove last comma
    function stringifyResult(city: string, region: string, country: string): string {
        let result: string = ''
        if (city) result += city + ', ';
        if (region) result += region + ', ';
        if (country) result += country + ',';
        return result.slice(0, -1);
    }

    return (
        <div id='data-display' className="data-display">
            <DataDisplayField label={'IP Address'} result={ipResponse.ip} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Location'} result={stringifyResult(ipResponse.city, ipResponse.region, ipResponse.country)} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Timezone'} result={`UTC ${ipResponse.timezone}`} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Isp'} result={ipResponse.isp} />
        </div>
    )
}

