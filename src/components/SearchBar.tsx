import axios from "axios";

import "../styles/SearchBar.scss";

interface Props {
    placeholder: string;
    setIpResponse: any;
};

interface ipResponse {
    ip: string;
    lat: string,
    lng: string,
    city?: string;
    region?: string;
    country?: string;
    timezone: string;
    isp: string;
}

export const SearchBar: React.FC<Props> = ({ placeholder, setIpResponse }) => {
    const apiKey: string = 'at_oDYp4pdQHFfB8CUs5Er7QRjG0QGxX';

    //TODO: Check type for onClick Event
    function getInputValue(event: any) {
        event.preventDefault();
        let paramKey: string;
        const inputValue: string = (document.getElementById('ip-input') as HTMLInputElement).value;

        // checks if value passed is an input or hostname
        // eslint-disable-next-line
        const ValidIpAddressRegex = new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$");
        // eslint-disable-next-line
        const ValidHostnameRegex = new RegExp("^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$");

        if (ValidIpAddressRegex.test(inputValue) === true) {
            paramKey = 'ipAddress';
        } else if (ValidHostnameRegex.test(inputValue) === true) {
            paramKey = 'domain';
        } else {
            return window.alert('Please input correct IP address or domain.')
        };

        const apiUrl: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${paramKey}=${inputValue}`;

        //@ts-ignore
        axios.get(apiUrl)
            .then((response) => {
                const ipResponse: ipResponse = {
                    ip: response.data.ip,
                    lat: response.data.location.lat,
                    lng: response.data.location.lng,
                    city: response.data.location.city,
                    region: response.data.location.region,
                    country: response.data.location.country,
                    timezone: response.data.location.timezone,
                    isp: response.data.isp,
                }

                console.log(response)
                setIpResponse(ipResponse)
            })
            .catch(error => {
                console.log(error);
                window.alert('Invalid request, please check your input or try again later')
            })
    };

    return (
        <div className="search-bar">
            <form className="search-bar__form" action="submit" onSubmit={getInputValue}>
                <input id="ip-input" className="search-bar__input" type="search" placeholder={placeholder} required />
                <button type="submit" className="search-bar__button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
                </button>
            </form>
        </div >
    )
};