import './Header.scss';


// @ts-ignore
import SearchBar from './SearchBar.tsx'

function Header({ setIpResponse }) {
    // const background = './images/pattern-bg.png'

    return (
        <header>
            <div className="header--background">
                <h1 className="header--heading">IP Address Tracker</h1>
                <SearchBar setIpResponse={setIpResponse} placeholder="Search for any IP address or domain" />
            </div>
        </header >
    )
}

export default Header