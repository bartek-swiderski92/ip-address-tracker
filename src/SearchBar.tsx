import "./SearchBar.scss";

function SearchBar({ placeholder }) {
    return (
        <div className="search-bar">
            <div className="search-bar--wrapper">

                <input className="search-bar--input" type="search" id="ip-input" placeholder={placeholder} />
                <button className="search-bar--button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
                </button>

            </div>
        </div>

    )
}

export default SearchBar