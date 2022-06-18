import './Header.scss'

function Header() {
    const background = './images/pattern-bg.png'


    return (
        <header>
            <div className="background-image"
                style={{
                    backgroundImage: "url(" + background + ")"
                }}
            >
                {/* <img className="header-bg-image" src={require('./images/pattern-bg.png')} alt="background" /> */}

            </div>
        </header >
    )
}

export default Header