import "./SearchBar.scss";

interface Props {
    placeholder: string;
    setIpResponse: any;
}

export const SearchBar: React.FC<Props> = ({ placeholder, setIpResponse }) => {

    function getInputValue() {
        setIpResponse({
            "ip": "82.42.241.7",
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
            <div className="search-bar__wrapper">

                <input id="ip-input" className="search-bar__input" type="search" placeholder={placeholder} />
                <button className="search-bar__button" onClick={getInputValue}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
                </button>

            </div>
        </div>

    )
}