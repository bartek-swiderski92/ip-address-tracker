import '../styles/DataDisplay.scss';
import { DataDisplayField } from "./DataDisplayField"

interface Props {
    ipResponse: {
        ip: string,
        location: {
            country: string,
            region: string,
            city: string,
            timezone: string
        },
        isp: string,
    };
}

export const DataDisplay: React.FC<Props> = ({ ipResponse }) => {

    // Assigns props to variables
    const [ip, city, region, country, timezone, isp]: [string, string, string, string, string, string] = [ipResponse?.ip, ipResponse?.location.city, ipResponse?.location.region, ipResponse.location.country, ipResponse?.location.timezone, ipResponse?.isp]

    // Checks if the value is defined
    function stringifyResult(city: string, region: string, country: string): string {
        return (
            city ? `${city},` : ``
                + region ? `${region},` : ''
                    + country ? `${country},` : ''
        ).slice(0, -1);
    }

    return (
        <div id='data-display' className="data-display">
            <DataDisplayField label={'IP Address'} result={ip} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Location'} result={stringifyResult(city, region, country)} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Timezone'} result={`UTC ${timezone}`} />
            <div className="data-display__divider"></div>
            <DataDisplayField label={'Isp'} result={isp} />
        </div>
    )
}

