import axios from "axios";

import "../styles/SearchBar.scss";

import { IpResponse } from "./IpResponse.model";

interface Props {
    placeholder: string;
    setIpResponse: any;
    animateLoading: any;
};


export const SearchBar: React.FC<Props> = ({ placeholder, setIpResponse, animateLoading }) => {
    const apiKey: string = 'at_oDYp4pdQHFfB8CUs5Er7QRjG0QGxX';

    const getInputValue = (event: React.FormEvent): void => {
        event.preventDefault();
        animateLoading(true);

        let paramKey: string;
        const inputValue: string = (document.getElementById('ip-input') as HTMLInputElement).value;

        // Check if the passed value is an input or a hostname
        const ValidIpAddressRegex = new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$");
        const ValidHostnameRegex = new RegExp("^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$");

        // Enter correct param key
        if (ValidIpAddressRegex.test(inputValue) === true) {
            paramKey = 'ipAddress';
        } else if (ValidHostnameRegex.test(inputValue) === true) {
            paramKey = 'domain';
        } else {
            return window.alert('Please input correct IP address or domain.')
        };

        const apiUrl: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${paramKey}=${inputValue}`;

        axios.get(apiUrl)
            .then((response) => {
                const ipResponse: IpResponse = {
                    ip: response.data.ip,
                    lat: response.data.location.lat,
                    lng: response.data.location.lng,
                    city: response.data.location.city,
                    region: response.data.location.region,
                    country: response.data.location.country,
                    timezone: response.data.location.timezone,
                    isp: response.data.isp,
                }
                animateLoading(false);
                setIpResponse(ipResponse)
            })
            .catch(() => {
                animateLoading(false);
                setIpResponse({
                    ip: '',
                    lat: '',
                    lng: '',
                    timezone: '',
                    isp: '',
                });
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