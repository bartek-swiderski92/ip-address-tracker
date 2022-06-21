import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import "../styles/SearchBar.scss";

interface Props {
    placeholder: string;
    setIpResponse: any;
}

export const SearchBar: React.FC<Props> = ({ placeholder, setIpResponse }) => {

    //TODO: set if statement for ip address/domain
    const ValidIpAddressRegex = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
    const ValidHostnameRegex = "^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$";


    //TODO: Check type for onClick Event
    function getInputValue(event: any) {
        const inputValue: string = (document.getElementById('ip-input') as HTMLInputElement).value
        event.preventDefault();
        console.log(inputValue)
        setIpResponse({
            "ip": "98.255.241.7",
            "location": {
                "country": "GB",
                "region": "England",
                "city": "St Albans",
                "lat": 51.75,
                "lng": -0.33333,
                "postalCode": "",
                "timezone": "+01:00",
                "geonameId": 2638867
            },
            "domains": [
                "cpc119116-heme13-2-0-cust6.9-1.cable.virginm.net"
            ],
            "as": {
                "asn": 5089,
                "name": "NTL",
                "route": "82.42.0.0/16",
                "domain": "http://www.virginmedia.com",
                "type": "Cable/DSL/ISP"
            },
            "isp": "Virgin Media Limited"
        });
    }

    return (
        <div className="search-bar">
            <form className="search-bar__form" action="submit">
                <input id="ip-input" className="search-bar__input" type="search" placeholder={placeholder} required />
                <button className="search-bar__button" onSubmit={getInputValue}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
            </button>
        </form>
        </div >

    )
}