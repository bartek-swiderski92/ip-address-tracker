import '../styles/Header.scss';
import { SearchBar } from './SearchBar';

interface Props {
    setIpResponse: any;
    animateLoading: any;
}

export const Header: React.FC<Props> = ({ setIpResponse, animateLoading }) => {
    return (
        <header>
            <div className="header__background">
                <h1 className="header__heading">IP Address Tracker</h1>
                <SearchBar setIpResponse={setIpResponse} placeholder="github.com" animateLoading={animateLoading} />
            </div>
        </header >
    )
}

