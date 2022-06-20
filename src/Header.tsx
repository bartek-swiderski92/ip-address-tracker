import './Header.scss';
//@ts-ignore
import { SearchBar } from './SearchBar.tsx'

interface Props {
    setIpResponse: {}
}

export const Header: React.FC<Props> = ({ setIpResponse }) => {

    return (
        <header>
            <div className="header__background">
                <h1 className="header__heading">IP Address Tracker</h1>
                <SearchBar setIpResponse={setIpResponse} placeholder="Search for any IP address or domain" />
            </div>
        </header >
    )
}

