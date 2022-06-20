import '../styles/Header.scss';
import { SearchBar } from './SearchBar';

interface Props {
    setIpResponse: any;
}

export const Header: React.FC<Props> = ({ setIpResponse }) => {
    return (
        <header>
            <div className="header__background">
                <h1 className="header__heading">IP Address Tracker</h1>
                <SearchBar setIpResponse={setIpResponse} placeholder="github.com" />
            </div>
        </header >
    )
}

