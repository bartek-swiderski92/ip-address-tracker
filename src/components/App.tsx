import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import '../styles/App.scss';

import { Header } from './Header';
import { DataDisplay } from './DataDisplay';
import { MapsFrame } from './MapsFrame';

const API_KEY = 'AIzaSyBrsnBRlSG9TfiQQif6GbwzTp7AQtdeyCA'

function App() {

    const [ipResponse, setIpResponse] = useState()

    return (
        <div className="app">
            <Header setIpResponse={setIpResponse} />



            {ipResponse ? (
                <div className="app__response">
                    <DataDisplay ipResponse={ipResponse} />
                    <MapsFrame ipResponse={ipResponse} API_KEY={API_KEY} />
                </div >
            ) : (

                <>
                    <FontAwesomeIcon className="app__spinner" icon={faSpinner} />
                </>
            )
            }
            <div className="app__attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                Coded by <a href="https://www.linkedin.com/in/bartek-swiderski92/">Bartek Swiderski</a>.
            </div>
        </div>
    );
}

export default App;
