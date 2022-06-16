import './Header.scss'

function Header() {

    return (
        <header>
            <div className="background-image">
                <img className="header-bg-image" src={require('./images/pattern-bg.png')} alt="background" />
            </div>
        </header>
    )
}

export default Header